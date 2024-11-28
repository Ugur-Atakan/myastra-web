import { FileText, Activity, Mail, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Doğum Bilgilerini Gir',
    description: 'Doğum tarihini, saatini ve yerini paylaş',
  },
  {
    icon: Activity,
    title: 'Paketini Seç',
    description: 'İhtiyacına en uygun paketi belirle',
  },
  {
    icon: Mail,
    title: 'Sonuçlarını Al',
    description: 'Doğum haritanı detaylı analiz et',
  },
];

export default function HowItWorks() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        3 Basit Adımda Astrolojik Rehberliğe Ulaş!
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-FDEAE9 transform translate-x-1/2" />
              )}
              <div className="bg-white rounded-2xl p-6 shadow-sm relative z-10">
                <div className="bg-FDEAE9 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-EF7874" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}