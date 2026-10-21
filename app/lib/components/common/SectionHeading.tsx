import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
};

export const SectionHeading = ({ index, eyebrow, title }: SectionHeadingProps) => {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-4">
        {index && <span className="mr-3 text-pink">{index}</span>}
        {eyebrow}
      </p>
      <h2 className="heading-section max-w-3xl">{title}</h2>
    </Reveal>
  );
};
