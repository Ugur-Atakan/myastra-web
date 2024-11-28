import DashboardLayout from '../components/layout/DashboardLayout';
import AstrologerCard from '../components/astrologers/AstrologerCard';
import { Search } from 'lucide-react';

const astrologers = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop',
    specialties: ['Vedik Astroloji', 'Doğum Haritası'],
    experience: 8,
    rating: 4.9,
    reviewCount: 128,
    price: 450,
    availability: 'Bugün müsait',
  },
  {
    id: 2,
    name: 'Mehmet Demir',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop',
    specialties: ['Batı Astrolojisi', 'Sinastri'],
    experience: 12,
    rating: 4.8,
    reviewCount: 256,
    price: 550,
    availability: '2 gün içinde',
  },
  {
    id: 3,
    name: 'Zeynep Kaya',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop',
    specialties: ['Karma Astroloji', 'Transit Analizi'],
    experience: 15,
    rating: 5.0,
    reviewCount: 312,
    price: 600,
    availability: 'Bugün müsait',
  },
  {
    id: 4,
    name: 'Can Özkan',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop',
    specialties: ['Finansal Astroloji', 'İş Astrolojisi'],
    experience: 10,
    rating: 4.7,
    reviewCount: 184,
    price: 500,
    availability: '3 gün içinde',
  },
];

export default function Astrologers() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Astrologlar</h1>
          <p className="text-gray-600">
            Uzman astrologlarımızla kişisel danışmanlık seansı planlayın
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Astrolog ara..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent"
            />
          </div>
        </div>

        {/* Astrologer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {astrologers.map((astrolog) => (
            <AstrologerCard key={astrolog.id} astrolog={astrolog} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}