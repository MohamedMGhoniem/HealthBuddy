export default function ContentHeading({ isHero, title, subheading }) {
  return (
    <>
      {isHero ? (
        <h1 className="heading-primary">{title}</h1>
      ) : (
        <h2 className="heading-secondary">{title}</h2>
      )}
      <span className="subheading margin-bot-lrg">{subheading}</span>
    </>
  );
}
