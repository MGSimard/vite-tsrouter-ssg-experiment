import { Link } from "@tanstack/react-router";
import { ToggleTheme } from "@/_components/ToggleTheme";
import { Bolt, Menu, X } from "lucide-react";
import { Button } from "@/_components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerDescription,
  DrawerTitle,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/_components/ui/drawer";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";

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

// Plan
// When below N width
// Render Draw button instead of links

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/40  backdrop-blur-sm h-18 flex items-center">
      <div className="max-w-8xl mx-auto flex justify-between items-center w-full gap-4 px-6">
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="in-data-[state=open]:rotate-180 in-data-[state=open]:scale-0 in-data-[state=open]:opacity-0 duration-200" />
                <X className="in-data-[state=open]:rotate-0 in-data-[state=open]:scale-100 in-data-[state=open]:opacity-100 absolute inset-0 -rotate-180 scale-0 opacity-0 duration-200 m-auto" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-screen max-w-none left-0 transform-none">
              <ul className="flex flex-col items-center gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <PopoverClose asChild>
                      <Link to={link.href}>{link.label}</Link>
                    </PopoverClose>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
          {/* <Drawer direction="top">
            <DrawerTrigger aria-label="Open navigation">
              <Menu />
            </DrawerTrigger>
            <DrawerContent className="p-4">
              <ul className="flex flex-col items-center gap-4">
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
            </DrawerContent>
          </Drawer> */}
        </div>
      </div>
    </header>
  );
}
