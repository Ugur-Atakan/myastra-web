import { MessageCircle, Map, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Sorunuzu Sorun',
    description: 'Net ve spesifik bir soruyla başlayın.',
  },
  {
    icon: Map,
    title: 'Haritanızı Oluşturalım',
    description: 'Sorunun sorulduğu anın astrolojik haritasını çıkarıyoruz.',
  },
  {
    icon: CheckCircle,
    title: 'Yanıtınızı Alın',
    description: 'Detaylı astrolojik analizimizle sorularınıza rehberlik ediyoruz.',
  },
];

export default function HowItWorks() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Tek Soru Astrolojisi Nasıl İşler?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-FDEAE9 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon className="h-8 w-8 text-EF7874" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}