import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Send, Lock, CreditCard } from 'lucide-react';

export default function SingleQuestionChat() {
  const [message, setMessage] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setShowPayment(true);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Tek Soru Astrolojisi</h2>
            <p className="text-gray-600">Sorunuzu detaylı bir şekilde açıklayın</p>
          </div>

          {/* Chat Messages */}
          <div className="h-[400px] p-6 space-y-4">
            {/* System Message */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-FDEAE9 rounded-full flex items-center justify-center">
                <Lock className="h-4 w-4 text-EF7874" />
              </div>
              <div className="flex-1 bg-gray-50 rounded-2xl p-4">
                <p className="text-gray-600">
                  Merhaba! Lütfen astrolojik analiz için sorunuzu yazın. Sorunuz ne kadar detaylı olursa, o kadar doğru bir analiz yapabiliriz.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Modal */}
          {showPayment && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                <div className="text-center mb-6">
                  <div className="bg-FDEAE9 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-EF7874" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sorunuzun Cevaplanması için Ödeme Yapın
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Sorunuz uzman astrologlarımız tarafından 24 saat içinde cevaplanacaktır.
                  </p>
                  <div className="text-2xl font-bold text-EF7874 mb-6">299₺</div>
                  <button className="w-full bg-EF7874 text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors mb-4">
                    Ödemeye Geç
                  </button>
                  <button 
                    onClick={() => setShowPayment(false)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    İptal Et
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-gray-100">
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sorunuzu buraya yazın..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-EF7874 focus:border-transparent resize-none"
                rows={3}
              />
              <button
                type="submit"
                className="absolute right-3 bottom-3 p-2 bg-EF7874 text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}