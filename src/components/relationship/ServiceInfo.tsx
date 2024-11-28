import { Heart, MessageCircle, AlertCircle, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Heart,
    text: 'Güçlü yönlerinizi öğrenin',
  },
  {
    icon: MessageCircle,
    text: 'İletişim tarzınızı analiz edin',
  },
  {
    icon: AlertCircle,
    text: 'Olası sorun noktalarını belirleyin',
  },
  {
    icon: Lightbulb,
    text: 'Daha güçlü bir bağ kurmak için öneriler alın',
  },
];

export default function ServiceInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">İlişki Analizi Nedir?</h2>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        İlişki analizi, çiftlerin birbirlerini daha iyi anlamasına yardımcı olmak için hazırlanan kişisel bir rehberdir. 
        Analizimiz, doğum haritalarınızdan ve astrolojik verilerinizden yola çıkarak ilişkinizin dinamiklerini detaylı şekilde ortaya koyar.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-center gap-4 p-4 bg-FDEAE9 rounded-xl">
              <div className="bg-white p-2 rounded-lg">
                <Icon className="h-6 w-6 text-EF7874" />
              </div>
              <p className="font-medium text-gray-900">{feature.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}