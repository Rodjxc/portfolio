import { educationItems } from "../../data/education";

export const Education = () => {
  return (
    <section className="relative flex flex-col items-center py-16">
      <h2 className="heading-display my-10 text-center md:my-16">Education</h2>
      <ul className="flex max-w-3xl flex-col gap-4">
        {educationItems.map((item) => (
          <li key={item.text}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="body-md nav-link"
              >
                {item.text}
              </a>
            ) : (
              <p className="body-md">{item.text}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
