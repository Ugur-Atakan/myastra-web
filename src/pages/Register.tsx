import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import toast from 'react-hot-toast';
import { User, Mail, Lock } from 'lucide-react';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        fullName,
        email,
        createdAt: serverTimestamp()
      });

      toast.success('Hesabınız başarıyla oluşturuldu!');
      navigate('/birth-chart');
    } catch (error: any) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        toast.error('Bu e-posta adresi ile daha önce kayıt yapılmış');
      } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        toast.error('Şifre en az 6 karakter olmalıdır');
      } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        toast.error('Geçersiz e-posta adresi');
      } else {
        toast.error('Kayıt olurken bir hata oluştu');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="https://myastra.com.tr/wp-content/uploads/2024/10/myastra-logo.png" alt="Myastra Logo" className="mx-auto h-12 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900">Myastra'ya Kaydolun</h2>
          <p className="mt-2 text-gray-600">Astrolojik yolculuğunuza başlayın</p>
        </div>
        
        <div className="bg-FDEAE9 rounded-xl shadow-lg p-8">
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Soyad
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent"
                  placeholder="Ad Soyad"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-posta Adresi
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent"
                  placeholder="ornek@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-EF7874 text-white rounded-lg px-4 py-3 font-medium hover:bg-opacity-90 transition-colors duration-200"
            >
              {loading ? 'Kaydediliyor...' : 'Kaydol'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Zaten hesabınız var mı?{' '}
              <Link to="/" className="text-EF7874 hover:underline font-medium">
                Giriş Yapın
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}