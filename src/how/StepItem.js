import PhoneGraphic from "./PhoneGraphic";

const StepItem = ({ number, title, description, reverse }) => (
    <div className={`step ${reverse ? 'step-reverse' : ''}`}>
        <div className="text-block">
            <span className="step-number">{number}</span> 
            <h3>{title}</h3>
            <p >{description}</p>
        </div>
        <PhoneGraphic />
    </div>
);
export default StepItem