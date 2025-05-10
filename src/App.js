import Header from './header/Header';
import HeroSection from './hero/HeroSection';
import HowItWorks from './how/HowItWorks';
import MeetSection from './meet/MeetSection';
import Features from './features/Features';
import Review from './review/Review';
import FaqSection from './faq/FaqSection';
import WhyMediBuddy from './why/WhyMediBuddy';
import DownloadSection from './download/Download';
import Newsletter from './newsletter/Newsletter';
import Footer from './footer/Footer';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  useEffect(function () {
    const hero = document.querySelector('.section-hero');
    const header = document.querySelector('.header');

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) header.classList.add('sticky');
        if (entry.isIntersecting) header.classList.remove('sticky');
      },
      { root: null, threshold: 0.2 }
    );

    heroObs.observe(hero);

    return () => {
      heroObs.unobserve(hero);
    };
  }, []);

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
      <Newsletter />
      <Footer />
    </>
  );
}
