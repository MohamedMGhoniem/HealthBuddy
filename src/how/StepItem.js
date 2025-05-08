import PhoneGraphic from './PhoneGraphic';
import { elementObserver } from '../helper';
import { useEffect, useRef, useState } from 'react';

const StepItem = function ({ number, title, description, reverse }) {
  const [isVisible, setIsVisible] = useState(false);
  const observedEl = useRef(null);

  useEffect(function () {
    elementObserver(setIsVisible, observedEl, 0.2);
  }, []);

  return (
    <div
      className={`step ${reverse ? 'step-reverse' : ''} ${
        isVisible ? 'reveal-parts' : ''
      }`}
      ref={observedEl}
    >
      <div className="text-block">
        <span className="step-number">{number}</span>
        <h3 className="heading-ternary">{title}</h3>
        <p className="paragraph">{description}</p>
      </div>
      <PhoneGraphic />
    </div>
  );
};
export default StepItem;
