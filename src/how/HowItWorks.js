import Content from '../Content';
import ContentHeading from '../ContentHeading';
import Decoration from '../Decoration';
import Section from '../Section';
import StepItem from './StepItem';
import { useEffect, useRef, useState } from 'react';
import { elementObserver } from '../helper';
import '../styles/hom.css'

const steps = [
  {
    number: '01',
    title: 'Tell Us About You',
    description:
      'Start by sharing a little about yourself — your goals, dietary preferences, allergies, and lifestyle. The more we know, the better we can help!',
  },
  {
    number: '02',
    title: 'Let the AI Do Its Thing',
    description:
      'Our smart buddy (yes, that lovable mascot!) crunches the numbers, learns your needs, and builds a plan that fits you — not some generic diet.',
  },
  {
    number: '03',
    title: 'Get Your Daily Plan',
    description:
      'Receive daily personalized meal plans with full nutrition breakdowns, snack ideas, hydration reminders, and more — all tailored to your vibe.',
  },
  {
    number: '04',
    title: 'Track, Adjust & Thrive',
    description:
      'Life changes, and so can your plan! Log your meals, share your progress, and let MedBuddy evolve with you every step of the way.',
  },
];

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionHow = useRef(null);

  useEffect(() => {
    elementObserver(setIsVisible, sectionHow, 0.2);
  }, []);

  return (
    <Section className="section-how" ref={sectionHow}>
      <Decoration src={'./images/how/top.png'} className={'decoration-top'} />

      <div className={`content-wrapper ${isVisible ? 'slide-up' : ''}`}>
        <Content>
          <ContentHeading
            title={'How It Works'}
            subheading={`It's Kinda Like Magic`}
          />
        </Content>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-wrapper ${
              isVisible ? (index % 2 === 0 ? 'slide-from-left' : 'slide-from-right') : ''
            }`}
            style={{ transitionDelay: `${0.2 * (index + 1)}s` }} 
          >
            <StepItem
              number={step.number}
              title={step.title}
              description={step.description}
              reverse={index % 2 !== 0} 
            />
          </div>
        ))}
      </div>

      <Decoration
        src={'./images/how/bottom.png'}
        className={'decoration-bottom'}
      />
    </Section>
  );
};

export default HowItWorks;

