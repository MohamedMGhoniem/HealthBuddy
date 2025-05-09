// unified intersection observer
export function elementObserver(setter, ref, threshold) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log(entry);
      if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
        setter(true);
      }
      if (!entry.isIntersecting && entry.boundingClientRect.y > 0) {
        setter(false);
      }
    },
    {
      root: null,
      threshold: threshold,
    }
  );

  const section = ref.current;
  if (section) observer.observe(section);

  return () => {
    if (section) observer.unobserve(section);
  };
}
