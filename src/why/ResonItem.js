export default function ResonItem({ src, title, content }) {
  return (
    <li className="reason">
      <figure>
        <img src={src} alt="reason related illustration"></img>
      </figure>
      <figcaption>
        <h3 className="heading-ternary">{title}</h3>
        <p className="paragraph">{content}</p>
      </figcaption>
    </li>
  );
}
