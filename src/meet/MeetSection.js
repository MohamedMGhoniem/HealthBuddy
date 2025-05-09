import Section from '../Section';
import Content from '../Content';
import ContentHeading from '../ContentHeading';
import Decoration from '../Decoration';
import '../styles/meet.css';
import SanjoMessage from './SanjoMessage';

const messages = [
  'Craving something healthy and tasty? I got you!',

  'Tell me your goals, and I’ll cook up the perfect plan.',

  'Allergic to nuts? No worries — I’ll keep ’em out of your meals.',

  'Feeling low energy today? Let’s tweak your nutrition!',

  'I learn what works for you — no one-size-fits-all plans here!',

  'Need a cheat day? I won’t judge. I’ll just adjust!',

  'Meal plans, snack ideas, hydration reminders… I do it all!',
  'Your health journey, but smarter (and yummier).',
];

export default function HowItWorks() {
  return (
    <Section className={'section-meet'}>
      <Decoration
        src={'./images/meet/back.png'}
        className={'decoration-back'}
      />
      <Content>
        <ContentHeading
          title={'Meet Your Buddy'}
          subheading={'The Brain Behind the Plan'}
        />
      </Content>
      <div className="messages-container">
        <div className="sanjo-messages">
          {messages.map((msg, i) => (
            <SanjoMessage keys={i} message={msg} />
          ))}
        </div>

        <Decoration
          src={'./images/meet/sanjo-back-stand-2.png'}
          className={'decoration-sanjo-stand'}
        />
      </div>
      <div className="meet-sanjo">
        <p className="paragraph">
          Hey there! I'm Sanjo — your smart health sidekick. I’m here to craft
          meal plans, track your wellness, and keep you feeling your best. Think
          of me as your AI nutritionist, fitness coach, and health cheerleader
          all rolled into one!
        </p>
        <Decoration
          src={'./images/meet/sanjo-waving.png'}
          className={'decoration-sanjo-waving'}
        />
      </div>

      <Decoration src={'./circles.png'} className={'decoration-bottom'} />
    </Section>
  );
}
