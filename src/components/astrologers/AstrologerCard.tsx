import { Star, Clock } from 'lucide-react';

interface Astrolog {
  id: number;
  name: string;
  image: string;
  specialties: string[];
  experience: number;
  rating: number;
  reviewCount: number;
  price: number;
  availability: string;
}

interface AstrologCardProps {
  astrolog: Astrolog;
}

export default function AstrologerCard({ astrolog }: AstrologCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-start gap-4 mb-4">
        {/* Circular Image */}
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src={astrolog.image}
            alt={astrolog.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Name and Rating */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {astrolog.name}
            </h3>
            <div className="flex items-center flex-shrink-0">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">{astrolog.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            {astrolog.experience} yıl deneyim • {astrolog.reviewCount} değerlendirme
          </p>
        </div>
      </div>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mb-4">
        {astrolog.specialties.map((specialty) => (
          <span
            key={specialty}
            className="text-xs px-2 py-1 bg-FDEAE9 text-EF7874 rounded-full"
          >
            {specialty}
          </span>
        ))}
      </div>

      {/* Availability */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
        {astrolog.availability}
      </div>

      {/* Price and Button */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <div>
          <span className="text-lg font-semibold text-gray-900">
            {astrolog.price} ₺
          </span>
          <span className="text-sm text-gray-500">/seans</span>
        </div>
        <button className="bg-EF7874 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
          Randevu Al
        </button>
      </div>
    </div>
  );
}