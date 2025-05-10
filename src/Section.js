export default function Section({ className, children }) {
  return (
    <section className={className} id={className.split('-')[1]}>
      <div className={`container`}>{children}</div>
    </section>
  );
}
