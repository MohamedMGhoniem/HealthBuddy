import Content from '../Content';
import ContentHeading from '../ContentHeading';
import Section from '../Section';
import FaqItem from './FaqItem';
import '../styles/faqSection.css';
import Decoration from '../Decoration';
import ContentParagraph from '../ContentParagraph';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Medibuddy?',
    answer:
      'MediBuddy uses AI to analyze your dietary preferences, health goals, and lifestyle, creating meal plans tailored just for you.',
  },
  {
    question: 'Is Medibuddy free to use?',
    answer:
      'Yes! MediBuddy provides a detailed nutrition breakdown for every meal, helping you stay on top of your daily intake.',
  },
  {
    question: 'Is my data safe with Medibuddy?',
    answer:
      'Absolutely. MediBuddy integrates with your fitness apps to track your activity and provide personalized recommendations.',
  },
  {
    question: 'What kind of meals will it recommend?',
    answer:
      'The AI learns from your habits and preferences, offering suggestions for meals, workouts, and health tips to keep you motivated.',
  },
];

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggleOpen = function (currQeustion) {
    setIsOpen(!(currQeustion === isOpen) ? currQeustion : null);
  };

  return (
    <Section className={'section-faq'}>
      <Content>
        <ContentHeading title={'Know before you go'} />
        <ContentParagraph>
          Find answers to common questions and get ready for <br />
          your healthy journey
        </ContentParagraph>
      </Content>
      <ul className="faq-list list">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            onToggleOpen={handleToggleOpen}
            isOpen={isOpen}
            curQestion={index + 1}
          />
        ))}
      </ul>
      <Decoration src={'./circles.png'} className={'decoration-bottom'} />
    </Section>
  );
}
