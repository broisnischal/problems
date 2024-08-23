import { Outlet } from "@remix-run/react";
import { SideNav } from "~/components/sidenav";

export default function Main() {
  return (
    <main className="relative flex flex-1 bg-white">
      <div>
        <SideNav onItemClick={() => {}} />
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </main>
  );
}
