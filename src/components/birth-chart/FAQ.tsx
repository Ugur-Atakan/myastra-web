import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Doğum haritası analizim için ne bilgilere ihtiyaç var?',
    answer: 'Doğum tarihiniz, saatiniz ve doğum yeriniz gereklidir. Bu bilgiler, doğum anınızdaki gezegen konumlarını belirlemek için kullanılır.',
  },
  {
    question: 'Raporlar hangi formatta teslim ediliyor?',
    answer: 'Tüm raporlarımız PDF formatında, e-posta yoluyla teslim edilir. Birebir danışmanlık paketinde ek olarak video görüşme de yapılır.',
  },
  {
    question: 'Yapay zeka analizini diğerlerinden ayıran nedir?',
    answer: 'Yapay zeka analizi anında teslim edilir ve istediğiniz kadar soru sorma imkanı sunar. Ancak uzman yorumu içermez.',
  },
  {
    question: 'Uzman astrolog ile birebir görüşme nasıl yapılır?',
    answer: 'Birebir danışmanlık paketini seçtikten sonra, size uygun bir randevu saati belirlenir ve görüşme online olarak gerçekleştirilir.',
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