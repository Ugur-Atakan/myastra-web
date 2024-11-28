import { useNavigate } from 'react-router-dom';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';
import type { Ticket } from '../../types/ticket';

interface TicketListProps {
  tickets: Ticket[];
  loading: boolean;
}

const statusConfig = {
  open: {
    label: 'Açık',
    icon: Clock,
    className: 'bg-blue-50 text-blue-600',
  },
  'in-progress': {
    label: 'İşleniyor',
    icon: AlertCircle,
    className: 'bg-yellow-50 text-yellow-600',
  },
  closed: {
    label: 'Çözüldü',
    icon: CheckCircle,
    className: 'bg-green-50 text-green-600',
  },
};

const priorityConfig = {
  low: { label: 'Düşük', className: 'bg-gray-100 text-gray-600' },
  medium: { label: 'Orta', className: 'bg-yellow-100 text-yellow-600' },
  high: { label: 'Yüksek', className: 'bg-red-100 text-red-600' },
};

export default function TicketList({ tickets, loading }: TicketListProps) {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-100 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (tickets.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
        <p className="text-gray-600">Henüz destek talebiniz bulunmuyor.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
      {tickets.map((ticket) => {
        const status = statusConfig[ticket.status];
        const StatusIcon = status.icon;
        const priority = priorityConfig[ticket.priority];

        return (
          <div
            key={ticket.id}
            onClick={() => navigate(`/dashboard/support/${ticket.id}`)}
            className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {ticket.subject}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {ticket.message}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`px-3 py-1 rounded-full text-sm ${priority.className}`}>
                  {priority.label}
                </span>
                <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${status.className}`}>
                  <StatusIcon className="h-4 w-4" />
                  {status.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}