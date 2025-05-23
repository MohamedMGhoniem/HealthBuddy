import Content from '../Content';
import ContentHeading from '../ContentHeading';
import Decoration from '../Decoration';
import Section from '../Section';
import StepItem from './StepItem';
import { useEffect, useState } from 'react';
import '../styles/how.css';

const steps = [
  {
    number: '01',
    title: 'Tell Us About You',
    description:
      'Start by sharing a little about yourself — your goals, dietary preferences, allergies, and lifestyle. The more we know, the better we can help!',
    src:"./images/how/img1.jpg"
  },
  {
    number: '02',
    title: 'Let the AI Do Its Thing',
    description:
      'Our smart buddy (yes, that lovable mascot!) crunches the numbers, learns your needs, and builds a plan that fits you — not some generic diet.',
    src:"./images/how/2.jpg"
  },
  {
    number: '03',
    title: 'Get Your Daily Plan',
    description:
      'Receive daily personalized meal plans with full nutrition breakdowns, snack ideas, hydration reminders, and more — all tailored to your vibe.',
    src:"./images/how/3.jpg"
  },
  {
    number: '04',
    title: 'Track, Adjust & Thrive',
    description:
      'Life changes, and so can your plan! Log your meals, share your progress, and let MedBuddy evolve with you every step of the way.',
    src:"./images/how/4.jpg"
  },
];

const HowItWorks = ({ theme }) => {
  return (
    <Section className="section-how">
      <Decoration
        src={`./images/how/top-l.png`}
        className={`decoration-top ${
          theme === 'light' && 'decoration-selected'
        }`}
      />
      <Decoration
        src={`./images/how/top.png`}
        className={`decoration-top ${
          theme === 'dark' && 'decoration-selected'
        }`}
      />

      <div className={`content-wrapper`}>
        <Content>
          <ContentHeading
            title={'How It Works'}
            subheading={`It's Kinda Like Magic`}
          />
        </Content>
      </div>

      <div className="steps-container">
        {steps.map((step, i, steps) => (
          <StepItem
            key={i}
            number={step.number}
            title={step.title}
            description={step.description}
            src={step.src}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>

      <Decoration
        src={`./images/how/bottom-l.png`}
        className={`decoration-bottom ${
          theme === 'light' && 'decoration-selected'
        }`}
      />
      <Decoration
        src={`./images/how/bottom.png`}
        className={`decoration-bottom ${
          theme === 'dark' && 'decoration-selected'
        }`}
      />
    </Section>
  );
};

export default HowItWorks;
