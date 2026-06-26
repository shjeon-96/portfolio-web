export function SectionHeading({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-balance md:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">{description}</p>
    </div>
  );
}
