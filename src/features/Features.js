import FeatureItem from "./FeatureItem.js";
import Section from '../Section';
import Content from '../Content';
import Decoration from '../Decoration';

export default function Features() {
    const features = [
        { icon: 'user', text: 'Personalized Meal Plans', lineLength: 'medium' },
        { icon: 'vector', text: 'Nutrition Breakdown', lineLength: 'long' },
        { icon: 'align', text: 'Smart Health Tracking', lineLength: 'short' },
        { icon: 'robot', text: 'AI-Driven Recommendations', lineLength: 'long' },
        { icon: 'seedling', text: 'Lifestyle & Fitness Tips', lineLength: 'medium' },
        { icon: 'bell', text: 'Daily Health Reminders', lineLength: 'long' },
    ];

    return (
        <Section className={'section-features'}>
            <Content className={'features-content'}>
                <div className="left">
                    <Decoration src={'./images/feature/white-circle.png'} className={'circle_up'} />
                    <div className="sidebar heading-secondary">
                        <h2>Key Features</h2>
                    </div>
                    <Decoration src={'./images/feature/white-circle.png'} className={'circle_down'} />
                </div>
                
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-wrapper">
                            <div className={`connector-line connector-line--${feature.lineLength}`}></div>
                            <FeatureItem 
                                icon={feature.icon} 
                                text={feature.text}
                            />
                        </div>
                    ))}
                </div>
            <Decoration src={'./circles.png'} className={'decoration-bottom'} /> 
            {/*this img not match the design can you check it ? 
            and there is another img missed "ضبف الصور صح يا استااااذ"*/}
            </Content>
        </Section>
    )
}