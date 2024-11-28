import { Shield } from 'lucide-react';

export default function SecurityInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
      <div className="bg-FDEAE9 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
        <Shield className="h-8 w-8 text-EF7874" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Gizliliğiniz Bizim İçin Önemli
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Verilerinizi koruma altına alıyoruz. Sorduğunuz sorular ve aldığınız yanıtlar tamamen gizlidir.
      </p>
    </div>
  );
}