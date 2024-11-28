import { Shield, Lock, Eye } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Güvenli Veri İşleme',
    description: 'Verileriniz SSL şifreleme ile korunur',
  },
  {
    icon: Lock,
    title: 'Gizlilik Garantisi',
    description: 'Bilgileriniz üçüncü taraflarla paylaşılmaz',
  },
  {
    icon: Eye,
    title: 'Özel Erişim',
    description: 'Raporlarınıza sadece siz erişebilirsiniz',
  },
];

export default function SecurityInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Gizliliğiniz Bizim İçin Önemli
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {securityFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-FDEAE9 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="h-6 w-6 text-EF7874" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}