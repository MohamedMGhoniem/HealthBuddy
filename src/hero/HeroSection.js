import LaptopSvg from './LaptopSvg';
import MobileSvg from './MobileSvg';
import Section from '../Section';
import Pulse from './Pulse';

export default function HeroSection() {
  return (
    <Section className="section-hero">
      <img
        src="./images/hero/hero-top.png"
        alt="decoration"
        aria-hidden="true"
        className="decoration-top"
      ></img>
      <div className="content">
        <h1 className="heading-primary">
          Your Smart Health <br /> Companion
        </h1>
        <span className="subheading margin-bot-lrg">
          Personalized Health Starts Here
        </span>
        <p className="paragraph content-txt">
          Meet MediBuddy — your AI-powered wellness companion that understands
          your body, your goals, and your lifestyle. Get custom meal plans,
          nutrition insights, and smart daily guidance made just for you.
        </p>
        <LaptopSvg></LaptopSvg>
        <MobileSvg></MobileSvg>
        <button className="btn-download">Download Now!</button>
      </div>
      <img
        src="./images/hero/hero-bottom.png"
        alt="decoration"
        aria-hidden="true"
        className="decoration-bottom"
      ></img>
      <Pulse />
    </Section>
  );
}
