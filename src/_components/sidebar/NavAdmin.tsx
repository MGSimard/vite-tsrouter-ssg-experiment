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
import { Link, useLocation } from "@tanstack/react-router";

// TODO: Think about adding muted text for active subpage

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
      activeExact?: boolean;
    }[];
  }[];
}) {
  const { isMobile } = useSidebar();
  const location = useLocation();

  // Get immediate active subpage (General, Team, Billing, etc.)
  const getActiveSubpage = (item: (typeof items)[0]) => {
    if (!item.items) return null;
    const basePath = item.url;
    const relativePath = location.pathname.replace(basePath, "").replace(/^\//, "");
    const immediateSection = relativePath.split("/")[0];
    if (!immediateSection) {
      return item.items.find((sub) => sub.activeExact);
    }
    return item.items.find((sub) => sub.url.endsWith(`/${immediateSection}`));
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Admin</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const activeSubpage = getActiveSubpage(item);

          return (
            <DropdownMenu key={item.title}>
              <SidebarMenuItem>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    <item.icon />
                    <span className="flex items-center gap-2">
                      {item.title}
                      {activeSubpage && <span className="text-xs text-muted-foreground">• {activeSubpage.title}</span>}
                    </span>
                    <MoreHorizontal className="ml-auto" />
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
                          }}
                          activeOptions={{ exact: item.activeExact, includeSearch: false }}>
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                ) : null}
              </SidebarMenuItem>
            </DropdownMenu>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
