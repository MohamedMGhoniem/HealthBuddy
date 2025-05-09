export default function Decoration({ src, className }) {
  return <img src={src} alt="" aria-hidden="true" className={className}></img>;
}
