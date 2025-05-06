import Section from '../Section';
import Content from '../Content';
import ContentHeading from '../ContentHeading';
import TestimonialCarousel from './TestimonialCarousel';
import '../styles/review.css'

export default function Review() {
    return (
        <Section className={'section-review'}>
            <Content>
                <ContentHeading
                    title={'Healthy stories worth sharing'}
                    subheading={'Real stories, real results — here’s how MediBuddy is helping people feel better, eat smarter, and take charge of their health every day.'}
                />
            </Content>
            <div className='container'>
                <TestimonialCarousel />
            </div>
        </Section>
    );
}