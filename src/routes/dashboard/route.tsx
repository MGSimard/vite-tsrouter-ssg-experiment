import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider } from "@/_components/ui/sidebar";
import { DashboardSidebar } from "@/_components/sidebar/DashboardSidebar";
import { DashboardBreadcrumbs } from "@/_components/sidebar/DashboardBreadcrumbs";

export const Route = createFileRoute("/dashboard")({
  component: LayoutDashboard,
  loader: () => ({ crumb: "Dashboard" }),
});

function LayoutDashboard() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardBreadcrumbs />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
