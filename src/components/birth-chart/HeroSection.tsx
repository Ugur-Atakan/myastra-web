import { useNavigate } from 'react-router-dom';
import { Activity, Sparkles, ArrowRight } from 'lucide-react';

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
              <span className="text-sm font-medium">Doğum Haritası Analizi</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hayatının{' '}
              <span className="text-EF7874">Haritasını</span>{' '}
              Keşfet! 🌌
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Doğum haritan, yaşam yolculuğunu anlamanın anahtarıdır. 
              Sana özel analizlerle astrolojik rehberlik al.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/dashboard/birth-chart/analysis')}
                className="inline-flex items-center justify-center gap-2 bg-EF7874 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Activity className="h-5 w-5" />
                Doğum Haritamı Analiz Et
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-all border border-gray-200">
                Paketleri İncele
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-3xl" />
            <img
              src="https://myastra.com.tr/wp-content/uploads/2024/11/DALL·E-2024-11-27-22.43.49-A-balanced-and-elegant-image-for-a-birth-chart-theme-in-soft-pink-tones.-The-design-features-a-detailed-but-clean-circular-astrological-chart-in-the-c.webp"
              alt="Doğum Haritası"
              className="rounded-3xl shadow-2xl w-full h-full object-cover"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 left-4 bg-white p-4 rounded-xl shadow-lg transform -rotate-6">
              <Activity className="h-6 w-6 text-EF7874" />
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