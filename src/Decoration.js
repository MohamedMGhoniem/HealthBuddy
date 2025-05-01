export default function Decoration({ src, className }) {
  return (
    <img
      src={src}
      alt="decoration"
      aria-hidden="true"
      className={className}
    ></img>
  );
}
