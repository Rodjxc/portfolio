import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="heading-h2 mb-4">Error 404</h1>
      <p className="body-lg mb-8 max-w-md">
        The content doesn&apos;t exist or couldn&apos;t be displayed.
      </p>
      <Link href="/" className="nav-link body-md">
        Back home
      </Link>
    </div>
  );
}
