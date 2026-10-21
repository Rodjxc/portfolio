import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-3 text-primary no-underline">
      <Image
        src="/img/rod-headshot.jpg"
        alt=""
        width={40}
        height={40}
        className="size-10 rounded-full object-cover ring-1 ring-border transition-transform group-hover:rotate-[-8deg]"
      />
      <span className="heading-h6 leading-tight">
        Rod Jimeno
        <span className="body-xs block !text-secondary">Front-end Developer</span>
      </span>
    </Link>
  );
};
