import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import DashboardLayout from '../components/layout/DashboardLayout';
import { ArrowLeft, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Ticket, TicketMessage } from '../types/ticket';

export default function TicketDetail() {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ticketId || !auth.currentUser) return;

    // Fetch ticket details
    const fetchTicket = async () => {
      const ticketDoc = await getDoc(doc(db, 'tickets', ticketId));
      if (ticketDoc.exists()) {
        setTicket({ id: ticketDoc.id, ...ticketDoc.data() } as Ticket);
      }
      setLoading(false);
    };

    // Subscribe to messages
    const messagesQuery = query(
      collection(db, `tickets/${ticketId}/messages`),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const messageData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TicketMessage[];
      setMessages(messageData);
    });

    fetchTicket();
    return () => unsubscribe();
  }, [ticketId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketId || !auth.currentUser || !newMessage.trim()) return;

    try {
      await addDoc(collection(db, `tickets/${ticketId}/messages`), {
        ticketId,
        userId: auth.currentUser.uid,
        message: newMessage,
        isStaff: false,
        createdAt: serverTimestamp(),
      });

      setNewMessage('');
    } catch (error) {
      toast.error('Mesaj gönderilemedi');
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-100 rounded w-1/4" />
            <div className="h-32 bg-gray-100 rounded" />
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!ticket) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">Destek talebi bulunamadı</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard/support')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Geri Dön
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">{ticket.subject}</h1>
          <p className="text-gray-600">Talep #{ticket.id.slice(0, 8)}</p>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-2xl shadow-sm mb-6">
          <div className="p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isStaff ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.isStaff
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-FDEAE9 text-gray-900'
                  }`}
                >
                  <p>{message.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Form */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-gray-100">
            <div className="relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent resize-none"
                rows={3}
              />
              <button
                type="submit"
                className="absolute right-3 bottom-3 p-2 bg-EF7874 text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}