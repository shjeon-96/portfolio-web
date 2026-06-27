type GuideItem = {
  title: string;
  body: string;
};

export function GuidePanel({
  ariaLabel,
  items,
}: Readonly<{
  ariaLabel: string;
  items: GuideItem[];
}>) {
  return (
    <section className="surface-panel mt-10 grid gap-4 p-5 md:grid-cols-3" aria-label={ariaLabel}>
      {items.map((item) => (
        <article key={item.title}>
          <h2 className="font-semibold">{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.body}</p>
        </article>
      ))}
    </section>
  );
}
