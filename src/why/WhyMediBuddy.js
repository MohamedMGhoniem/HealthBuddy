import Content from '../Content';
import ContentHeading from '../ContentHeading';
import Section from '../Section';
import ResonItem from './ResonItem';

const reasons = [
  {
    src: './images/why/personalized.png',
    title: 'Truly Personalized',
    text: 'We learn your needs, preferences, and goals — and craft plans that actually fit you. No cookie-cutter advice here.',
  },
  {
    src: './images/why/friendly.png',
    title: 'Truly Friendly AI That Feels Human',
    text: 'Meet your health buddy: smart, kind, and always one step ahead. It’s like having a doctor, a dietitian, and a cheerleader all in one.',
  },
  {
    src: './images/why/sustainable.png',
    title: 'Truly Sustainable Wellness',
    text: 'No crash diets. No guilt. Just smart, doable changes that stick — and evolve with you.',
  },
  {
    src: './images/why/pocket.png',
    title: 'Truly Wellness in Your Pocket',
    text: 'Everything you need, always on hand. Plans, reminders, support — all in one beautifully simple app.',
  },
];
export default function WhyMediBuddy() {
  return (
    <Section className={'section-why'}>
      <Content>
        <ContentHeading
          title={'Why MediBuddy?'}
          subheading={
            'Your health isn’t one-size-fits-all — and neither are we.'
          }
        />
      </Content>
      <ul className="reasons list">
        {reasons.map((reason, i) => (
          <ResonItem
            key={i}
            src={reason.src}
            title={reason.title}
            content={reason.text}
          />
        ))}
      </ul>
    </Section>
  );
}
