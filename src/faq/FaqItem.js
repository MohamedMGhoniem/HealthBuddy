import { useState } from 'react';

export default function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleOpen}>
                <span>{question}</span>
                <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
            <div className='line'></div>
        </div>
    );
}