import DashboardLayout from '../components/layout/DashboardLayout';
import DailyHoroscope from '../components/dashboard/DailyHoroscope';
import AstrologerAppointment from '../components/dashboard/AstrologerAppointment';
import ZodiacSigns from '../components/dashboard/ZodiacSigns';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ZodiacSigns />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DailyHoroscope />
          <AstrologerAppointment />
        </div>
      </div>
    </DashboardLayout>
  );
}