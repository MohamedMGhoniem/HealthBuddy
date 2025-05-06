import Content from "../Content";
import ContentHeading from "../ContentHeading";
import Section from "../Section";
import '../styles/faqSection.css'


export default function FaqSection() {
    return (
        <Section className={'section-faq'}>
                <Content>
                    <ContentHeading
                    title={'Know before you go'}
                    subheading={'find answers to common questions and get ready to your healthy journey'}
                    />
                </Content>
        </Section>
    )
}

