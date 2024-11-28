import { HelpCircle } from 'lucide-react';

export default function ServiceInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-FDEAE9 p-3 rounded-xl">
          <HelpCircle className="h-8 w-8 text-EF7874" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Tek Soru Astrolojisi Nedir?</h2>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed">
        Tek soru astrolojisi, hayatınızda net yanıtlar aradığınız bir soruyu astrolojik bir analizle cevaplayan özel bir yöntemdir. 
        Soru sorduğunuz anın gezegen hareketleri ve astrolojik haritası üzerinden detaylı analiz yapıyoruz. 
        Doğru bir yön bulmanız için buradayız!
      </p>
    </div>
  );
}