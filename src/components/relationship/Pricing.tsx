import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    name: 'Sadece Rapor',
    price: 499,
    description: 'İlişki analizi detaylı rapor olarak teslim edilir',
    features: [
      'Detaylı ilişki uyum analizi',
      'Gezegen pozisyonları yorumu',
      'İlişki potansiyeli değerlendirmesi',
      'PDF formatında detaylı rapor',
      'E-posta desteği',
    ],
  },
  {
    name: 'Birebir Danışmanlık',
    price: 1499,
    description: '1:1 Astrolog danışmanlığı içeren kapsamlı analiz',
    features: [
      'Tüm Rapor paketi özellikleri',
      '60 dakika video görüşme',
      'Soru-cevap oturumu',
      'Kişisel tavsiyeler',
      'Öncelikli destek',
    ],
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Size Uygun Bir Paket Seçin
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Detaylı bir astrolojik analiz ile ilişkinize rehberlik ediyoruz.
          Şimdi uygun fiyatlarla bu eşsiz deneyimi yaşayın!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <div className="text-4xl font-bold text-EF7874 mb-6">
              {pkg.price}₺
            </div>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-EF7874 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/dashboard/relationship/analysis')}
              className="w-full bg-EF7874 text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
            >
              Paketi Seç
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}