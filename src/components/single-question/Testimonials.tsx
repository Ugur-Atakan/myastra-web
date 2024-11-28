const testimonials = [
  {
    text: 'Kaybettiğim değerli bir eşyamı bulmamı sağladılar. Harika bir hizmet!',
    author: 'Ayşe K.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop',
  },
  {
    text: 'İş hayatımla ilgili sorumun yanıtı, doğru kararı almamda çok etkili oldu.',
    author: 'Mehmet T.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Kullanıcılarımız Ne Diyor?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="font-medium text-gray-900">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}