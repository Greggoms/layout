import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Do cool things.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col md:flex-row gap-5 md:gap-0">
      <Sidebar />
      <section className="container md:w-full md:mt-5 mb-10">
        {children}
      </section>
    </div>
  );
}
