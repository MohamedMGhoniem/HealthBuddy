import { useEffect, useRef, useState } from 'react';
import { elementObserver } from '../helper';

export default function ResonItem({ src, title, content }) {
  const [isVisible, setIsVisible] = useState(false);

  const obeservedEl = useRef(null);

  useEffect(function () {
    elementObserver(setIsVisible, obeservedEl, 0.2);
  }, []);

  return (
    <li className={`reason ${isVisible ? 'revealed' : ''}`} ref={obeservedEl}>
      <figure className="reason-image">
        <img src={src} alt="reason related illustration"></img>
      </figure>
      <figcaption className="reason-txt">
        <h3 className="heading-ternary">{title}</h3>
        <p className="paragraph">{content}</p>
      </figcaption>
    </li>
  );
}
