import { EMAIL, socials } from "../../data/contact";

export const Footer = () => {
  return (
    <footer className="page-container mb-10 flex flex-col gap-8 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="body-sm text-secondary">
          &copy; {new Date().getFullYear()} Rod Jimeno · Front-end Developer in Oslo
        </p>
        <a href={`mailto:${EMAIL}`} className="nav-link body-sm mt-1">
          {EMAIL}
        </a>
      </div>
      <ul className="flex gap-3">
        {socials.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-pink hover:text-pink"
            >
              <Icon className="size-5" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
