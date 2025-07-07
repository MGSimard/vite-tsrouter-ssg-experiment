import { Link } from "@tanstack/react-router";
import { ToggleTheme } from "@/_components/ToggleTheme";
import { Bolt, Menu, X } from "lucide-react";
import { Button } from "@/_components/ui/button";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/_components/ui/popover";

const NAV_LINKS = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/40 backdrop-blur-3xl h-[var(--header-height)] flex items-center">
      <div className="max-w-8xl mx-auto flex justify-between items-center w-full gap-6 px-6">
        <nav className="flex items-center gap-8 font-light">
          <Link to="/" activeProps={{ className: "text-primary" }} aria-label="Home">
            <Bolt className="w-6 h-6" />
          </Link>
          <ul className="hidden md:flex w-full items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  activeProps={{ className: "text-primary" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ToggleTheme />
          <Button className="hidden md:block" asChild>
            <Link to="/dashboard">Access</Link>
          </Button>
          <Popover>
            <PopoverTrigger className="md:hidden" asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="in-data-[state=open]:rotate-180 in-data-[state=open]:scale-0 in-data-[state=open]:opacity-0 duration-200" />
                <X className="in-data-[state=open]:rotate-0 in-data-[state=open]:scale-100 in-data-[state=open]:opacity-100 absolute inset-0 -rotate-180 scale-0 opacity-0 duration-200 m-auto" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="md:hidden w-full p-4 wrapper-control">
              <ul className="flex flex-col gap-4 text-center">
                <li>
                  <PopoverClose asChild>
                    <Button
                      variant="ghost"
                      className="w-full text-muted-foreground hover:text-foreground transition-colors duration-200"
                      asChild>
                      <Link to="/" activeProps={{ className: "text-primary" }}>
                        Home
                      </Link>
                    </Button>
                  </PopoverClose>
                </li>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <PopoverClose asChild>
                      <Button
                        variant="ghost"
                        className="w-full text-muted-foreground hover:text-foreground transition-colors duration-200"
                        asChild>
                        <Link to={link.href} activeProps={{ className: "text-primary" }}>
                          {link.label}
                        </Link>
                      </Button>
                    </PopoverClose>
                  </li>
                ))}
                <li>
                  <PopoverClose asChild>
                    <Button className="w-full" asChild>
                      <Link to="/dashboard">Access</Link>
                    </Button>
                  </PopoverClose>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
