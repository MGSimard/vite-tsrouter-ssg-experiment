import { Link } from "@tanstack/react-router";

const links = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-8xl ">
        <div className="flex flex-wrap justify-between gap-8  py-12 px-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Company, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-8 text-sm md:order-last">
            {links.map((link, index) => (
              <Link key={index} to={link.href} className="text-muted-foreground hover:text-primary block duration-150">
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
