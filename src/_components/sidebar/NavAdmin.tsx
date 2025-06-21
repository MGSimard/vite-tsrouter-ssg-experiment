import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/_components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/_components/ui/dropdown-menu";
import { MoreHorizontal, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function NavAdmin({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Admin</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <DropdownMenu key={item.title}>
            <SidebarMenuItem>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  <item.icon /> {item.title} <MoreHorizontal className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              {item.items?.length ? (
                <DropdownMenuContent
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                  className="min-w-56 rounded-lg">
                  {item.items.map((item) => (
                    <DropdownMenuItem asChild key={item.title}>
                      <Link
                        to={item.url}
                        className="cursor-pointer"
                        activeProps={{
                          className: "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                        }}>
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              ) : null}
            </SidebarMenuItem>
          </DropdownMenu>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
