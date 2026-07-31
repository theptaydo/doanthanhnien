type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
};

export function SectionTitle({ eyebrow, title, description, invert = false }: SectionTitleProps) {
  const titleColor = invert ? "text-white" : "text-foreground";
  const bodyColor = invert ? "text-blue-100" : "text-gray-700";

  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-md bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-900">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={["text-balance text-3xl font-extrabold tracking-tight md:text-5xl", titleColor].join(" ")}>
        {title}
      </h2>
      {description ? <p className={["mt-4 text-base leading-7 md:text-lg", bodyColor].join(" ")}>{description}</p> : null}
    </header>
  );
}
