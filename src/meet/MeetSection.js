import Section from '../Section';
import Content from '../Content';
import ContentHeading from '../ContentHeading';
import Decoration from '../Decoration';

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
          <div className="log"></div>
          <p className="message">
            Craving something healthy and tasty? I got you!
          </p>
          <p className="message">
            Tell me your goals, and I’ll cook up the perfect plan.
          </p>
          <p className="message">
            Allergic to nuts? No worries — I’ll keep 'em out of your meals.
          </p>
          <p className="message">
            Feeling low energy today? Let’s tweak your nutrition!
          </p>
          <p className="message">
            I learn what works for you — no one-size-fits-all plans here!
          </p>
          <p className="message">
            Need a cheat day? I won’t judge. I’ll just adjust!
          </p>
          <p className="message">
            Meal plans, snack ideas, hydration reminders… I do it all!
          </p>
          <p className="message">
            Your health journey, but smarter (and yummier).
          </p>
          <p className="message">
            Let’s make staying healthy actually fun.” “Your personal AI health
            buddy — now with extra charm 😄
          </p>
        </div>
      </div>

      <figure className="sanjo-stand">
        <img src="./images/meet/sanjo-back-stand.png" alt="sanjo standing" />
      </figure>
      <Decoration
        src={'./images/meet/circles.png'}
        className={'decoration-bottom'}
      />
    </Section>
  );
}
