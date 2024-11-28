import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import toast from 'react-hot-toast';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function BirthChartForm() {
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthHour, setBirthHour] = useState('');
  const [birthMinute, setBirthMinute] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate('/');
        toast.error('Lütfen önce giriş yapın');
        return;
      }

      // Check if birth chart already exists
      const birthChartDoc = await getDoc(doc(db, 'birthCharts', user.uid));
      if (birthChartDoc.exists()) {
        navigate('/dashboard');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initMap",
    requestOptions: {
      types: ['(cities)'],
      componentRestrictions: { country: 'TR' }
    },
    debounce: 300,
  });

  const extractCityName = (fullAddress: string) => {
    return fullAddress.split(',')[0].trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      toast.error('Lütfen önce giriş yapın');
      navigate('/');
      return;
    }

    if (!value) {
      toast.error('Lütfen doğum yerini seçin');
      return;
    }
    setLoading(true);

    try {
      const results = await getGeocode({ address: value });
      const { lat, lng } = await getLatLng(results[0]);
      const cityName = extractCityName(value);
      
      const birthChartData = {
        userId: auth.currentUser.uid,
        birthDay: Number(birthDay),
        birthMonth: Number(birthMonth),
        birthYear: Number(birthYear),
        birthHour: Number(birthHour),
        birthMinute: Number(birthMinute),
        birthPlace: {
          city: cityName,
          latitude: lat,
          longitude: lng
        },
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, 'birthCharts', auth.currentUser.uid), birthChartData);
      toast.success('Doğum haritası bilgileriniz kaydedildi!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Bilgiler kaydedilirken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceSelect = (suggestion: any) => {
    setValue(suggestion.description, false);
    clearSuggestions();
  };

  // Dropdown için gerekli veriler
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 121 }, (_, i) => currentYear - i);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="https://myastra.com.tr/wp-content/uploads/2024/10/myastra-logo.png" alt="Myastra Logo" className="mx-auto h-12 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900">Doğum Haritası Bilgileri</h2>
          <p className="mt-2 text-gray-600">Doğum haritanızı oluşturmak için bilgilerinizi girin</p>
        </div>

        <div className="bg-FDEAE9 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Doğum Tarihi
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Gün</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Ay</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Yıl</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Doğum Saati
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={birthHour}
                    onChange={(e) => setBirthHour(e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Saat</option>
                    {hours.map(hour => (
                      <option key={hour} value={hour}>{hour}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={birthMinute}
                    onChange={(e) => setBirthMinute(e.target.value)}
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Dakika</option>
                    {minutes.map(minute => (
                      <option key={minute} value={minute}>{minute}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Doğum Yeri
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  disabled={!ready}
                  placeholder="Şehir ara..."
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent"
                  required
                />
                {status === "OK" && (
                  <ul className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {data.map((suggestion) => (
                      <li
                        key={suggestion.place_id}
                        className="cursor-pointer p-3 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => handlePlaceSelect(suggestion)}
                      >
                        {suggestion.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-EF7874 text-white rounded-lg px-4 py-3 font-medium hover:bg-opacity-90 transition-colors duration-200"
            >
              {loading ? 'Kaydediliyor...' : 'Doğum Haritamı Oluştur'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}