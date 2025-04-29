import { sectionObserver } from './helper';

export default function Section({ isObserved, className, children }) {
  return (
    <section className={className}>
      <div className={`container`}>{children}</div>
    </section>
  );
}
