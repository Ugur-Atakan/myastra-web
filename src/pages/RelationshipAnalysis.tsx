import DashboardLayout from '../components/layout/DashboardLayout';
import HeroSection from '../components/relationship/HeroSection';
import ServiceInfo from '../components/relationship/ServiceInfo';
import Advantages from '../components/relationship/Advantages';
import HowItWorks from '../components/relationship/HowItWorks';
import Testimonials from '../components/relationship/Testimonials';
import Pricing from '../components/relationship/Pricing';
import FAQ from '../components/relationship/FAQ';
import SecurityInfo from '../components/relationship/SecurityInfo';

export default function RelationshipAnalysis() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-24 py-8">
        <HeroSection />
        <ServiceInfo />
        <Advantages />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <SecurityInfo />
      </div>
    </DashboardLayout>
  );
}