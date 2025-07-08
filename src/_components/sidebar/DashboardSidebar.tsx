import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/_components/ui/sidebar";
import { NavTeam } from "@/_components/sidebar/NavTeam";
import { NavMain } from "@/_components/sidebar/NavMain";
import { NavAdmin } from "@/_components/sidebar/NavAdmin";
import { NavUser } from "@/_components/sidebar/NavUser";
import {
  Activity,
  AppWindowMac,
  AudioWaveform,
  ChartNoAxesColumnIncreasing,
  Command,
  GalleryVerticalEnd,
  Gauge,
  Settings,
  ShieldCheck,
  Target,
} from "lucide-react";
import { TeamSwitcher } from "./NavTeamSwitcher";

const NAV_LINKS = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Pro",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Pro",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: Gauge,
      activeExact: true,
    },
    {
      title: "Link Two",
      url: "/dashboard/link-two",
      icon: Activity,
    },
    {
      title: "Link Three",
      url: "/dashboard/link-three",
      icon: Target,
    },
    {
      title: "Link Four",
      url: "/dashboard/link-four",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      title: "Link Five",
      url: "/dashboard/link-five",
      icon: ShieldCheck,
    },
    {
      title: "The Thing",
      url: "/dashboard/The Thing",
      icon: AppWindowMac,
    },
  ],
  admin: [
    {
      title: "Organization Settings",
      url: "/dashboard/organization-settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/dashboard/organization-settings",
          activeExact: true,
        },
        {
          title: "Team",
          url: "/dashboard/organization-settings/team",
        },
        {
          title: "Billing",
          url: "/dashboard/organization-settings/billing",
        },
        {
          title: "Integrations",
          url: "/dashboard/organization-settings/integrations",
        },
        {
          title: "API Keys",
          url: "/dashboard/organization-settings/api-keys",
        },
      ],
    },
  ],
};

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={NAV_LINKS.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NAV_LINKS.navMain} />
        <NavAdmin items={NAV_LINKS.admin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
