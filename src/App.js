
import Header from './header/Header';
import HeroSection from './hero/HeroSection';
import HowItWorks from './how/HowItWorks';

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks/>
      <section style={{ height: '100vh' }}></section>
    </>
  );
}
