import DashboardLayout from '../components/layout/DashboardLayout';
import HeroSection from '../components/single-question/HeroSection';
import ServiceInfo from '../components/single-question/ServiceInfo';
import HowItWorks from '../components/single-question/HowItWorks';
import FAQ from '../components/single-question/FAQ';
import Pricing from '../components/single-question/Pricing';
import Testimonials from '../components/single-question/Testimonials';
import SecurityInfo from '../components/single-question/SecurityInfo';

export default function SingleQuestionAstrology() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-24 py-8">
        <HeroSection />
        <ServiceInfo />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Testimonials />
        <SecurityInfo />
      </div>
    </DashboardLayout>
  );
}