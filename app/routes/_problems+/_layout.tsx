import { Link, Outlet } from "@remix-run/react";
import { SideNav } from "~/components/sidenav";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="m-auto border-b w-full py-2">
        <Link to="/" className="">
          <h1 className="text-xl text-center">I got problem!</h1>
        </Link>
        <div className="flex gap-2 items-center justify-center flex-col">
          <button className="underline">add your problem?</button>
          <input type="text" className="border px-2" placeholder="Search..." />
        </div>
      </div>
      <br />
      <div className="flex h-full overflow-y-scroll">
        <div className="w-[400px] flex-1 px-3 bg-white overflow-y-scroll">
          <SideNav />
        </div>
        <div className="flex-[3] ">
          <div className="div px-4 ">
            <Outlet />
          </div>
          {/* <div className="footer text-sm flex w-full items-center justify-center border-t py-2">
            Copyright © {new Date().getFullYear()} - Nischal Dahal
          </div> */}
        </div>
      </div>
    </div>
  );
}
