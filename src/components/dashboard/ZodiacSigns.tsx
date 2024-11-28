import { useEffect, useState } from 'react';
import { auth, db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { calculateZodiacSign, calculateAscendant } from '../../utils/astrology';
import { getZodiacEmoji } from '../../utils/zodiacEmojis';

export default function ZodiacSigns() {
  const [sunSign, setSunSign] = useState<string>('');
  const [ascendant, setAscendant] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBirthChart = async () => {
      if (!auth.currentUser) return;

      try {
        const birthChartDoc = await getDoc(doc(db, 'birthCharts', auth.currentUser.uid));
        
        if (birthChartDoc.exists()) {
          const data = birthChartDoc.data();
          const calculatedSunSign = calculateZodiacSign(data.birthMonth, data.birthDay);
          const calculatedAscendant = calculateAscendant(
            data.birthDay,
            data.birthMonth,
            data.birthYear,
            data.birthHour,
            data.birthMinute,
            data.birthPlace.latitude,
            data.birthPlace.longitude
          );

          setSunSign(calculatedSunSign);
          setAscendant(calculatedAscendant);
        }
      } catch (error) {
        console.error('Error fetching birth chart:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBirthChart();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
        <div className="h-24 bg-gray-100 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Burç Bilgileriniz</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-FDEAE9 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl" role="img" aria-label={sunSign}>
              {getZodiacEmoji(sunSign)}
            </span>
            <div>
              <p className="text-sm text-gray-600">Güneş Burcu</p>
              <p className="font-medium text-gray-900">{sunSign}</p>
            </div>
          </div>
        </div>
        <div className="bg-FDEAE9 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl" role="img" aria-label={ascendant}>
              {getZodiacEmoji(ascendant)}
            </span>
            <div>
              <p className="text-sm text-gray-600">Yükselen Burç</p>
              <p className="font-medium text-gray-900">{ascendant}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}