export default function ContentHeading({ isHero, title, subheading = false }) {
  return (
    <>
      {isHero ? (
        <h1 className="heading-primary">{title}</h1>
      ) : (
        <h2 className="heading-secondary">{title}</h2>
      )}
      {subheading && (
        <span className="subheading margin-bot-lrg">{subheading}</span>
      )}
    </>
  );
}
