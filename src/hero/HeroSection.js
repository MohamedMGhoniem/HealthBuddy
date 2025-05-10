import LaptopSvg from './LaptopSvg';
import MobileSvg from './MobileSvg';
import Section from '../Section';
import Pulse from './Pulse';
import ContentParagraph from '../ContentParagraph';
import ContentHeading from '../ContentHeading';
import Content from '../Content';
import Decoration from '../Decoration';
import '../styles/hero.css';

export default function HeroSection() {
  return (
    <Section className="section-hero">
      <Decoration
        src={'./images/hero/hero-top.png'}
        className={'decoration-top'}
      />
      <Content>
        <ContentHeading
          isHero={true}
          title={
            <>
              Your Smart Health <br /> Companion
            </>
          }
          subheading={'Personalized Health Starts Here'}
        />
        <ContentParagraph>
          Meet MediBuddy — your AI-powered wellness companion that understands
          your body, your goals, and your lifestyle. Get custom meal plans,
          nutrition insights, and smart daily guidance made just for you.
        </ContentParagraph>
        <LaptopSvg />
        <MobileSvg />
      </Content>
      <button className="btn-download">Download Now!</button>
      <Pulse />
      <Decoration
        src={'./images/hero/hero-bottom.png'}
        className={'decoration-bottom'}
      />
    </Section>
  );
}
