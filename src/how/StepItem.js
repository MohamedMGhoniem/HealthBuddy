import PhoneGraphic from './PhoneGraphic';

const StepItem = ({ number, title, description, reverse }) => (
  <div className={`step ${reverse ? 'step-reverse' : ''}`}>
    <div className="text-block">
      <span className="step-number">{number}</span>
      <h3 className="heading-ternary">{title}</h3>
      <p className="paragraph">{description}</p>
    </div>
    <PhoneGraphic />
  </div>
);
export default StepItem;
