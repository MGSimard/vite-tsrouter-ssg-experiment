import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/_components/ui/sidebar";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useSidebar } from "@/_components/ui/sidebar";

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
  const { setOpenMobile } = useSidebar();

  // TODO: Consider mt-auto on admin sidebarGroup to push down by user?
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Admin</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="rdx-collapsible">
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link
                          to={item.url}
                          onClick={() => setOpenMobile(false)}
                          activeProps={{ "data-active": true }}
                          activeOptions={{ exact: item.activeExact, includeSearch: false }}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

{
  /* <DropdownMenu key={item.title}>
<SidebarMenuItem>
  <DropdownMenuTrigger asChild>
    <SidebarMenuButton
      tooltip={item.title}
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
      <item.icon />
      {item.title}
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
</DropdownMenu> */
}
