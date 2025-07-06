import { Link } from "@tanstack/react-router";
import { ToggleTheme } from "@/_components/ToggleTheme";
import { Bolt } from "lucide-react";
import { Button } from "../ui/button";

const NAV_LINKS = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/40  backdrop-blur-sm h-18 flex items-center">
      <div className="max-w-8xl mx-auto flex justify-between items-center w-full gap-4 px-6 py-4">
        <nav className="flex items-center gap-4">
          <Link to="/" activeProps={{ className: "text-primary" }}>
            <Bolt className="w-6 h-6" />
          </Link>
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  activeProps={{ className: "text-primary" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ToggleTheme />
          <Button>Access</Button>
        </div>
      </div>
    </header>
  );
}
