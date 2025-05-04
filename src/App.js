import Header from './header/Header';
import HeroSection from './hero/HeroSection';
import HowItWorks from './how/HowItWorks';
import MeetSection from './meet/MeetSection';
import Features from './features/Features'

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <MeetSection />
      <Features/>
      {/* <section style={{ height: '100vh' }}></section> */}
    </>
  );
}
