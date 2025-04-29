export function sectionObserver(section) {
  const observer = new IntersectionObserver(
    entries => {
      const [entry] = entries;
      console.log(entry);
    },
    {
      root: null,
      threshold: 0.8,
    }
  );

  if (section) observer.observe(section);
}
