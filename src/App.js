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
import Login from './login/Login';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const prevTheme = useRef(theme);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  function handleOpenForm() {
    setOpenLoginForm(true);
  }

  function handleCloseForm() {
    setOpenLoginForm(false);
  }

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(prevTheme.current);
    root.classList.add(theme);
    prevTheme.current = theme;
  }, [theme, prevTheme]);

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
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        handleOpenForm={handleOpenForm}
      />
      {openLoginForm && <Login onCloseForm={handleCloseForm} />}
      <HeroSection theme={theme} />
      <HowItWorks theme={theme} />
      <MeetSection theme={theme} />
      <Features theme={theme} />
      <WhyMediBuddy theme={theme} />
      <Review theme={theme} />
      <FaqSection theme={theme} />
      <DownloadSection theme={theme} />
      <Newsletter theme={theme} />
      <Footer theme={theme} />
    </>
  );
}
