const testimonials = [
  {
    text: 'Yapay zeka destekli analiz, inanılmaz derecede hızlı ve detaylıydı!',
    author: 'Elif Y.',
    location: 'İzmir',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop',
  },
  {
    text: 'Astroloğun verdiği rapor, hayatıma farklı bir bakış açısı kattı.',
    author: 'Can K.',
    location: 'İstanbul',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop',
  },
  {
    text: 'Birebir danışmanlık sayesinde geleceğim için somut adımlar attım.',
    author: 'Zeynep M.',
    location: 'Ankara',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Müşterilerimiz Ne Diyor?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 mb-6 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}