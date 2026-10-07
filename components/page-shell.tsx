export function PageShell({
  title,
  description,
  eyebrow,
}: Readonly<{ title: string; description?: string; eyebrow?: string }>) {
  return (
    <div className="container page-shell">
      <header className="page-introduction">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </header>
    </div>
  );
}
