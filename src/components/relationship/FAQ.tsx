import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Doğum bilgilerimi neden paylaşmam gerekiyor?',
    answer: 'Doğum bilgileri, kişinin doğum anındaki gezegen konumlarını belirlemek için gereklidir. Bu bilgiler, astrolojik analizin temelini oluşturur.',
  },
  {
    question: 'Analizi nasıl alacağım?',
    answer: 'Analiz raporunuz, ödemenizin ardından 24-48 saat içinde kayıtlı e-posta adresinize PDF formatında gönderilecektir.',
  },
  {
    question: 'Rapor ne kadar sürede hazır olur?',
    answer: 'Standart raporlar 24-48 saat içinde, birebir danışmanlık içeren paketler ise randevu tarihinize göre planlanır.',
  },
  {
    question: 'Astrolojiye inanmayan biri için faydalı olur mu?',
    answer: 'Analizlerimiz, ilişki dinamiklerini anlamak için bir araç olarak kullanılabilir. Astrolojiye inanmasanız bile, ilişkinize farklı bir perspektiften bakmanızı sağlar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Sıkça Sorulan Sorular
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}