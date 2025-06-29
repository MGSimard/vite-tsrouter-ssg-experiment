import { GalleryVerticalEnd, LucideIcon, MoreHorizontal, Settings2 } from "lucide-react";
import { SidebarMenuButton, SidebarMenu, SidebarMenuItem } from "@/_components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/_components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { useSidebar } from "@/_components/ui/sidebar";

const organization = {
  name: "Acme Inc",
  logo: GalleryVerticalEnd,
  plan: "Enterprise",
};

export function NavTeam({
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

  return (
    // <SidebarMenu>
    //   <SidebarMenuItem>
    //     <SidebarMenuButton size="lg" asChild>
    //       <a href="#">
    //         <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
    //           <GalleryVerticalEnd className="size-4" />
    //         </div>
    //         <div className="grid flex-1 text-left text-sm leading-tight">
    //           <span className="truncate font-medium">{organization.name}</span>
    //           <span className="truncate text-xs">{organization.plan}</span>
    //         </div>
    //       </a>
    //     </SidebarMenuButton>
    //   </SidebarMenuItem>
    // </SidebarMenu>
    <SidebarMenu>
      {items.map((item) => {
        return (
          <DropdownMenu key={item.title}>
            <SidebarMenuItem>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{organization.name}</span>
                    <span className="truncate text-xs">{organization.plan}</span>
                  </div>
                  <Settings2 className="ml-auto" />
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
  );
}
