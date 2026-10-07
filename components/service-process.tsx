const defaultSteps = [
  {
    title: "Contact",
    description:
      "Tell us where the property is and what heating or plumbing work you need.",
  },
  {
    title: "Discuss the job",
    description:
      "Talk through the problem or planned work and the details needed to assess it.",
  },
  {
    title: "Site visit / assessment",
    description:
      "Arrange a visit where needed to look at the property and understand the work involved.",
  },
  {
    title: "Quotation / next steps",
    description:
      "Review the proposed work and quotation, then discuss how to proceed.",
  },
];

export function ServiceProcess({
  steps = defaultSteps,
}: Readonly<{
  steps?: readonly { title: string; description: string }[];
}>) {
  return (
    <ol className="process-grid">
      {steps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
