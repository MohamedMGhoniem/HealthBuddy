import Content from "../Content";
import ContentHeading from "../ContentHeading";
import Section from "../Section";
import FaqItem from "./FaqItem";
import '../styles/faqSection.css'
import Decoration from "../Decoration";

const faqs = [
    {
        question: "What is Medibuddy?",
        answer: "MediBuddy uses AI to analyze your dietary preferences, health goals, and lifestyle, creating meal plans tailored just for you."
    },
    {
        question: "Is Medibuddy free to use?",
        answer: "Yes! MediBuddy provides a detailed nutrition breakdown for every meal, helping you stay on top of your daily intake."
    },
    {
        question: "Is my data safe with Medibuddy?",
        answer: "Absolutely. MediBuddy integrates with your fitness apps to track your activity and provide personalized recommendations."
    },
    {
        question: "What kind of meals will it recommend?",
        answer: "The AI learns from your habits and preferences, offering suggestions for meals, workouts, and health tips to keep you motivated."
    },
];

export default function FaqSection() {

    return (
        <Section className={'section-faq'}>
            <div className="container">
                <Content>
                    <ContentHeading
                        title={'Know before you go'}
                        subheading={'Find answers to common questions and get ready for your healthy journey'}
                    />
                </Content>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
            <Decoration src={'./circles.png'} className={'decoration-bottom'} />
        </Section>
    );
}