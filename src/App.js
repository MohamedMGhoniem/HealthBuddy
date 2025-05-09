import Header from './header/Header';
import HeroSection from './hero/HeroSection';
import HowItWorks from './how/HowItWorks';
import MeetSection from './meet/MeetSection';
import Features from './features/Features';
import Review from './review/Review';
import FaqSection from './faq/FaqSection';
import WhyMediBuddy from './why/WhyMediBuddy';
import DownloadSection from './download/Download';

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <MeetSection />
      <Features />
      <WhyMediBuddy />
      <Review />
      <FaqSection />
      <DownloadSection />
    </>
  );
}
