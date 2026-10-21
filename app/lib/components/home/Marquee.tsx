const items = [
  "Plot.ai",
  "Eiendom.no",
  "Homekey",
  "Marketer",
  "M360",
  "SmartSale",
  "EstateLab",
  "SendaPlays",
  "meinBafög.de",
];

export const Marquee = () => {
  return (
    <section aria-label="Companies and products I've worked on" className="py-16 md:py-24">
      <p className="eyebrow page-container mb-6">Shipped with &amp; for</p>
      <div className="relative flex overflow-hidden border-y border-border py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex shrink-0 animate-marquee items-center motion-reduce:animate-none">
          {[...items, ...items].map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= items.length}
              className="heading-h3 flex items-center gap-10 pr-10 whitespace-nowrap !text-secondary transition-colors hover:!text-primary"
            >
              {item}
              <span className="text-pink">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
