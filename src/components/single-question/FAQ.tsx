const faqs = [
  {
    question: 'Bu hizmet kimler için uygun?',
    answer: 'Tek soru astrolojisi, net ve spesifik bir sorusu olan herkes için uygundur.',
  },
  {
    question: 'Hangi tür sorular sorulabilir?',
    answer: 'İş, aşk, kayıp eşya, gelecek planları gibi birçok konuda soru sorabilirsiniz.',
  },
  {
    question: 'Ne kadar sürede sonuç alırım?',
    answer: 'Sorunuza bağlı olarak analizler 1-2 gün içinde tamamlanır.',
  },
];

export default function FAQ() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Sıkça Sorulan Sorular
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}