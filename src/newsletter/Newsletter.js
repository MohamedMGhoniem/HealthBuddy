import Content from '../Content';
import ContentHeading from '../ContentHeading';
import Section from '../Section';
import Decoration from '../Decoration';
import '../styles/newsletter.css';
import NewsletterForm from './NewsletterForm';

export default function Newsletter() {
  return (
    <Section className={'section-newsletter'}>
      <Content>
        <ContentHeading title={'Subscribe to our Newsletter'} />
      </Content>

      <div className="newsletter-paragraph">
        <h3 className="heading-ternary">Don’t Miss a Bite!</h3>
        <p className="paragraph">
          Get weekly wellness tips, nutrition facts, and Medibuddy updates
          delivered fresh to your inbox.
        </p>
      </div>
      <NewsletterForm />

      <Decoration
        src={'./circles.png'}
        className={'decoration-bottom decoration-selected'}
      />
    </Section>
  );
}
