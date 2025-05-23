import Section from '../Section';
import Content from '../Content';
import ContentHeading from '../ContentHeading';
import TestimonialCarousel from './TestimonialCarousel';
import '../styles/review.css';
import ContentParagraph from '../ContentParagraph';
import Decoration from '../Decoration';

export default function Review({ theme }) {
  return (
    <Section className={'section-review'}>
      <Decoration
        src={`./images/review/decoration-back-l.png`}
        className={`decoration-back ${
          theme === 'light' && 'decoration-selected'
        }`}
      />
      <Decoration
        src={`./images/review/decoration-back.png`}
        className={`decoration-back ${
          theme === 'dark' && 'decoration-selected'
        }`}
      />

      <Content>
        <ContentHeading title={'Healthy stories worth sharing'} />
        <ContentParagraph>
          Real stories, real results — here’s how MediBuddy is helping people
          feel better, eat smarter, and take charge of their health every day.
        </ContentParagraph>
      </Content>
      <TestimonialCarousel />
    </Section>
  );
}
