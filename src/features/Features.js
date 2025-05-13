import FeatureItem from './FeatureItem.js';
import Section from '../Section';
import Content from '../Content';
import Decoration from '../Decoration';
import ContentHeading from '../ContentHeading.js';
import '../styles/features.css';

const features = [
  { icon: 'user', text: 'Personalized Meal Plans', lineLength: 'medium' },
  { icon: 'vector', text: 'Nutrition Breakdown', lineLength: 'long' },
  { icon: 'align', text: 'Smart Health Tracking', lineLength: 'short' },
  { icon: 'robot', text: 'AI-Driven Recommendations', lineLength: 'long' },
  { icon: 'seedling', text: 'Lifestyle & Fitness Tips', lineLength: 'medium' },
  { icon: 'bell', text: 'Daily Health Reminders', lineLength: 'long' },
];

export default function Features({ theme }) {
  return (
    <Section className={'section-features'}>
      <Decoration
        src={`./images/feature/back-l.png`}
        className={`decoration-back ${
          theme === 'light' && 'decoration-selected'
        }`}
      />
      <Decoration
        src={`./images/feature/back.png`}
        className={`decoration-back ${
          theme === 'dark' && 'decoration-selected'
        }`}
      />

      <Content className={'features-content'}>
        <Decoration
          src={'./images/feature/white-circle.png'}
          className={'circle_up decoration-selected'}
        />
        <ContentHeading title={'Key Features'} />
        <Decoration
          src={'./images/feature/white-circle.png'}
          className={'circle_down decoration-selected'}
        />
      </Content>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-wrapper">
            <div
              className={`connector-line connector-line--${feature.lineLength}`}
            ></div>
            <FeatureItem icon={feature.icon} text={feature.text} />
          </div>
        ))}
      </div>
      <Decoration
        src={'./circles.png'}
        className={'decoration-bottom decoration-selected'}
      />
      {/*this img not match the design can you check it ? 
            and there is another img missed "ضبف الصور صح يا استااااذ"*/}
    </Section>
  );
}
