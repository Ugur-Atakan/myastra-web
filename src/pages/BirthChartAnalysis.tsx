import DashboardLayout from '../components/layout/DashboardLayout';
import HeroSection from '../components/birth-chart/HeroSection';
import ServiceInfo from '../components/birth-chart/ServiceInfo';
import Packages from '../components/birth-chart/Packages';
import HowItWorks from '../components/birth-chart/HowItWorks';
import FAQ from '../components/birth-chart/FAQ';
import Testimonials from '../components/birth-chart/Testimonials';
import SecurityInfo from '../components/birth-chart/SecurityInfo';

export default function BirthChartAnalysis() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-24 py-8">
        <HeroSection />
        <ServiceInfo />
        <Packages />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <SecurityInfo />
      </div>
    </DashboardLayout>
  );
}