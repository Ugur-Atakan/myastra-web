import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import DashboardLayout from '../components/layout/DashboardLayout';
import TicketList from '../components/support/TicketList';
import NewTicketModal from '../components/support/NewTicketModal';
import { Plus } from 'lucide-react';
import type { Ticket } from '../types/ticket';

export default function Support() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;

    // Using a simple query without compound ordering to avoid index requirements
    const ticketsQuery = query(
      collection(db, 'tickets'),
      where('userId', '==', auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(ticketsQuery, (snapshot) => {
      const ticketData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Ticket[];
      
      // Sort tickets client-side instead
      ticketData.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      
      setTickets(ticketData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Destek</h1>
            <p className="text-gray-600">Size nasıl yardımcı olabiliriz?</p>
          </div>
          <button
            onClick={() => setIsNewTicketModalOpen(true)}
            className="flex items-center gap-2 bg-EF7874 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Yeni Destek Talebi
          </button>
        </div>

        {/* Tickets List */}
        <TicketList tickets={tickets} loading={loading} />

        {/* New Ticket Modal */}
        <NewTicketModal
          isOpen={isNewTicketModalOpen}
          onClose={() => setIsNewTicketModalOpen(false)}
        />
      </div>
    </DashboardLayout>
  );
}