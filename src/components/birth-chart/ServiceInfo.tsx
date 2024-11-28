import { Star, Compass, Target, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Potansiyel yeteneklerin ve güçlü yanların',
    description: 'Doğuştan gelen yeteneklerinizi keşfedin',
  },
  {
    icon: Compass,
    title: 'İlişkilerde uyum ve zorluklar',
    description: 'İlişkilerinizi daha iyi anlayın',
  },
  {
    icon: Target,
    title: 'Kariyer ve başarı alanların',
    description: 'Profesyonel hayatınıza yön verin',
  },
  {
    icon: Sparkles,
    title: 'Geleceğin için astrolojik rehberlik',
    description: 'Doğru kararlar almanıza yardımcı olalım',
  },
];

export default function ServiceInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Doğum Haritası Sana Neler Söyler?
      </h2>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        Kişiliğin, ilişkilerin ve yaşam amacın hakkında derin bilgiler edinebilirsin.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex gap-6">
              <div className="bg-FDEAE9 p-4 rounded-xl h-fit">
                <Icon className="h-6 w-6 text-EF7874" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}