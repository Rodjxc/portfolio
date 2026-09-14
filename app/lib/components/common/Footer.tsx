export const Footer = () => {
  return (
    <footer className="page-container mt-16 mb-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
      <p className="body-sm text-secondary">&copy; 2026 Rod Jimeno, Web Dev</p>
      <p className="body-sm">
        <span className="text-secondary">say hi — </span>
        <a href="mailto:rodrysxc@gmail.com" className="nav-link">
          rodrysxc@gmail.com
        </a>
      </p>
    </footer>
  );
};
