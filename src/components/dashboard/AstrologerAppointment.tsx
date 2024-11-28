import { Calendar } from 'lucide-react';

export default function AstrologerAppointment() {
  const hasAppointment = false;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Astrolog Görüşmeniz</h2>
          <p className="text-sm text-gray-500">Kişisel Danışmanlık</p>
        </div>
        <Calendar className="h-6 w-6 text-EF7874" />
      </div>

      {hasAppointment ? (
        <div>
          <p className="text-gray-600">Yaklaşan görüşmeniz:</p>
          <div className="mt-4 p-4 bg-FDEAE9 rounded-lg">
            <p className="font-medium">30 Mart 2024, 14:30</p>
            <p className="text-sm text-gray-600">Astrolog Ayşe Yılmaz</p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Henüz planlanmış bir görüşmeniz bulunmuyor</p>
          <button className="bg-EF7874 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Görüşme Planla
          </button>
        </div>
      )}
    </div>
  );
}