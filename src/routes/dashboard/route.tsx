import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider } from "@/_components/ui/sidebar";
import { DashboardSidebar } from "@/_components/dashboard/sidebar/DashboardSidebar";
import { DashboardBreadcrumbs } from "@/_components/dashboard/sidebar/DashboardBreadcrumbs";

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
