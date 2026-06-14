import Header from "./components/Header/Header.tsx";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import OfferBar from "./components/OfferBar/OfferBar.tsx";
import LeadSection from "./components/LeadSection/LeadSection.tsx";
import ClinicCard from "./components/ClinicCard/ClinicCard.tsx";
import Marquee from "./components/Marquee/Marquee.tsx";
import DreamSmileSection from "./components/DreamSmileSection/DreamSmileSection.tsx";
import ResultsSection from "./components/ResultSection/ResultSection.tsx";
import WhyWhistleSection from "./components/WhyWhistleSection/WhyWhistleSection.tsx";
import WhistleDifference from "./components/WhistleDifference/WhistleDifference.tsx";
import ComparisonSection from "./components/ComparisonSection/ComparisonSection.tsx";
import PerfectSmileSteps from "./components/PerfectSmileSteps/PerfectSmileSteps.tsx";
import DoctorLedSection from "./components/DoctorLedSection/DoctorLedSection.tsx";
import HappySmilersSection from "./components/HappySmilersSection/HappySmilersSection.tsx";
import FaqSection from "./components/FaqSection/FaqSection.tsx";
import Footer from "./components/Footer/Footer.tsx";
import FooterCTA from "./components/Footer/FooterCTA.tsx";

function App() {
  return (
    <main className="pb-19">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
        <OfferBar />
      </div>
      <HeroSection />
      <LeadSection />
      <ClinicCard />
      <Marquee />
      <DreamSmileSection />
      <ResultsSection />
      <WhyWhistleSection />
      <WhistleDifference />
      <ComparisonSection />
      <PerfectSmileSteps />
      <DoctorLedSection />
      <HappySmilersSection />
      <FaqSection />
      <Footer />
      <FooterCTA />
    </main>
  );
}

export default App;
