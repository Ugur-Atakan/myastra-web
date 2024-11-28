import { Sparkles } from 'lucide-react';

export default function DailyHoroscope() {
  const biorhythm = {
    physical: 85,
    emotional: 65,
    intellectual: 92,
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Bugün Sizi Neler Bekliyor?</h2>
          <p className="text-sm text-gray-500">28 Mart 2024</p>
        </div>
        <Sparkles className="h-6 w-6 text-EF7874" />
      </div>

      <p className="text-gray-600 mb-6">
        Bugün, yaratıcı enerjiniz dorukta! Yeni başlangıçlar için ideal bir gün.
        Venüs-Jüpiter kavuşumu, sosyal ilişkilerinize pozitif bir etki yapacak.
      </p>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Biyoritim</h3>
        <div className="space-y-3">
          {Object.entries(biorhythm).map(([type, value]) => (
            <div key={type} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="capitalize">{type}</span>
                <span className="text-gray-500">{value}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-EF7874 rounded-full"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}