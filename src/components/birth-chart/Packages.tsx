import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    name: 'Yapay Zeka Destekli Analiz',
    price: 299,
    features: [
      'Anında teslim',
      'Kişiselleştirilmiş detaylı rapor',
      'Yapay zekaya istediğin soruları sorma imkânı',
      'Astrolojik geçmiş ve gelecek trend analizi',
      'PDF formatında indirilebilir rapor',
    ],
  },
  {
    name: 'Uzman Astrolog Analizi',
    price: 699,
    features: [
      '3 iş günü içinde teslim',
      'Uzman astrolog tarafından hazırlanmış detaylı rapor',
      'Önemli gezegen geçişlerinin yorumlanması',
      'İlişkiler ve kariyer hakkında özel astrolojik rehberlik',
      'Rapor hakkında ek sorular sorma hakkı',
    ],
  },
  {
    name: 'Birebir Danışmanlık',
    price: 1499,
    features: [
      'Uzman astrologla birebir 1 saat danışmanlık',
      'Kapsamlı yazılı rapor',
      'Soruların ve konuların kişiye özel ele alınması',
      'Önemli gezegen transitlerinin detaylı değerlendirilmesi',
      'Astroloğun önerileriyle kişisel strateji planı',
    ],
  },
];

export default function Packages() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Sana Uygun Paketi Seç!
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Her ihtiyaca uygun paketlerimizle astrolojik rehberliğe ulaş.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-EF7874 mb-6">
                {pkg.price}₺
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="h-5 w-5 text-EF7874 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => navigate('/dashboard/birth-chart/analysis')}
              className="w-full bg-EF7874 text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors mt-auto"
            >
              Hemen Al
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}