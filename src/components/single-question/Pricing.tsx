import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  'Detaylı astrolojik analiz',
  'Kişiselleştirilmiş yanıtlar',
  'Profesyonel astrolog desteği',
  'Hızlı yanıt süresi (1-2 gün)',
  'Özel astrolojik harita',
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmet Ücretimiz</h2>
        <p className="text-gray-600">
          Detaylı bir astrolojik analiz ile sorunuza rehberlik ediyoruz.
          Şimdi uygun fiyatlarla bu eşsiz deneyimi yaşayın!
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-FDEAE9 rounded-xl p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Tek Soru Astrolojisi</h3>
          <div className="text-4xl font-bold text-EF7874 mb-6">299₺</div>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-EF7874 mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => navigate('/dashboard/single-question/chat')}
            className="w-full bg-EF7874 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Şimdi Hemen Sorumu Sor!
          </button>
        </div>

        <div className="text-center text-gray-600">
          <p className="font-medium">Ekstra Sorular</p>
          <p>Her ek soru için +150₺</p>
        </div>
      </div>
    </div>
  );
}