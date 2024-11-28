import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Activity, Users, HelpCircle, Settings, X, MessageSquare, Heart } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Ana Sayfa', path: '/dashboard' },
  { icon: Activity, label: 'Doğum Haritası', path: '/dashboard/birth-chart' },
  { icon: MessageSquare, label: 'Tek Soru Astrolojisi', path: '/dashboard/single-question' },
  { icon: Heart, label: 'İlişki Analizi', path: '/dashboard/relationship' },
  { icon: Users, label: 'Astrologlar', path: '/dashboard/astrologers' },
  { icon: HelpCircle, label: 'Destek', path: '/dashboard/support' },
  { icon: Settings, label: 'Ayarlar', path: '/dashboard/settings' },
];

export default function Sidebar({ onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <img
            src="https://myastra.com.tr/wp-content/uploads/2024/10/myastra-logo.png"
            alt="Myastra Logo"
            className="h-8"
          />
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-FDEAE9 text-EF7874'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}