import { useNavigate } from 'react-router-dom';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-FDEAE9/50 to-white/20 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-EF7874/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-EF7874">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Tek Soru Astrolojisi</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Sorularınıza{' '}
              <span className="text-EF7874">Astrolojik Yanıtlar</span>{' '}
              Bulun!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Net ve spesifik bir sorunuz mu var? Astrolojik haritanız üzerinden 
              doğru yanıtları bulmanıza yardımcı oluyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/dashboard/single-question/chat')}
                className="inline-flex items-center justify-center gap-2 bg-EF7874 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5" />
                Hemen Soru Sorun
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-all border border-gray-200">
                Daha Fazla Bilgi
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-3xl" />
            <img
              src="https://myastra.com.tr/wp-content/uploads/2024/11/DALL·E-2024-11-27-21.43.18-A-sleek-and-professional-image-representing-a-single-question-astrology-service-designed-in-soft-pink-tones.-At-the-center-a-glowing-pink-question-m.webp"
              alt="Tek Soru Astrolojisi"
              className="rounded-3xl shadow-2xl w-full h-full object-cover"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 left-4 bg-white p-4 rounded-xl shadow-lg transform -rotate-6">
              <MessageSquare className="h-6 w-6 text-EF7874" />
            </div>
            <div className="absolute top-1/4 -right-2 bg-white p-4 rounded-xl shadow-lg transform rotate-12">
              <Sparkles className="h-6 w-6 text-EF7874" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}