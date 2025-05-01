export default function Section({ className, children }) {
  return (
    <section className={className}>
      <div className={`container`}>{children}</div>
    </section>
  );
}
