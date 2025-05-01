import StepItem from './StepItem'

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Tell Us About You',
            description: 'Start by sharing a little about yourself — your goals, dietary preferences, allergies, and lifestyle. The more we know, the better we can help!',
        },
        {
            number: '02',
            title: 'Let the AI Do Its Thing',
            description: 'Our smart buddy (yes, that lovable mascot!) crunches the numbers, learns your needs, and builds a plan that fits you — not some generic diet.',
        },
        {
            number: '03',
            title: 'Get Your Daily Plan',
            description: 'Receive daily personalized meal plans with full nutrition breakdowns, snack ideas, hydration reminders, and more — all tailored to your vibe.',
        },
        {
            number: '04',
            title: 'Track, Adjust & Thrive',
            description: 'Life changes, and so can your plan! Log your meals, share your progress, and let MedBuddy evolve with you every step of the way.',
        },
    ];

    return (
        <section className="how-it-works-section">
            <img
                src="./images/hero/hero-top.png"
                alt="decoration"
                aria-hidden="true"
                className="decoration-top"
            ></img>

            <div className="section-header">
                <h2 className='heading-secondary'>How It Works</h2>
                <p className="subheading margin-bot-lrg">It's Kinda Like Magic</p>
            </div>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <StepItem
                        key={index}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        reverse={index % 2 !== 0} // Alternate layout for odd-indexed steps
                    />
                ))}
            </div>

            <img
                src="./images/hero/hero-bottom.png"
                alt="decoration"
                aria-hidden="true"
                className="decoration-bottom"
            ></img>
        </section>
    );
};

export default HowItWorks;
