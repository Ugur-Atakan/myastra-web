import { Shield, MessageSquare, Stars, FileText, Compass } from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: 'İlişkide güven ve bağ artırıcı öneriler',
    description: 'Güven temelli bir ilişki için özel tavsiyeler',
  },
  {
    icon: MessageSquare,
    title: 'Daha sağlıklı iletişim için rehberlik',
    description: 'Etkili iletişim stratejileri ve öneriler',
  },
  {
    icon: Stars,
    title: 'Astrolojik uyum analizi',
    description: 'Detaylı gezegen ve burç uyumu analizi',
  },
  {
    icon: FileText,
    title: 'Kişiye özel ve detaylı rapor',
    description: 'Her çift için özelleştirilmiş analizler',
  },
  {
    icon: Compass,
    title: 'Yeni bir bakış açısı kazandırma',
    description: 'İlişkinize farklı bir perspektiften bakın',
  },
];

export default function Advantages() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        İlişki Analizinin Sunduğu Avantajlar
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {advantages.slice(0, 3).map((advantage, index) => {
          const Icon = advantage.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-FDEAE9 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-EF7874" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          );
        })}
      </div>
      
      {/* Centered bottom row */}
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
        {advantages.slice(3).map((advantage, index) => {
          const Icon = advantage.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-FDEAE9 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-EF7874" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}