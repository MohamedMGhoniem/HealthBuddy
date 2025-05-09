export default function FaqItem({
  question,
  answer,
  onToggleOpen,
  curQestion,
  isOpen,
}) {
  return (
    <li className="faq-item">
      <h3 className="heading-ternary">{question}</h3>
      <button
        className="btn-toggle-answer"
        onClick={() => {
          onToggleOpen(curQestion);
        }}
      >
        {isOpen === curQestion ? '−' : '+'}
      </button>
      <div className={`faq-answer ${isOpen === curQestion ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </li>
  );
}
