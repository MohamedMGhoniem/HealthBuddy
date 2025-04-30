// unified intersection observer
export function elementObserver(setter, ref) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log(entry);
      console.log(entry.isIntersecting, entry.boundingClientRect.y);
      if (entry.isIntersecting) console.log(entry);
      setter(true);
      if (!entry.isIntersecting && entry.boundingClientRect.y > 0) {
        setter(false);
      }
    },
    {
      root: null,
      threshold: 0.2,
    }
  );

  const section = ref.current;
  if (section) observer.observe(section);

  return () => {
    if (section) observer.unobserve(section);
  };
}
