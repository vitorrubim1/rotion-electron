import { Outlet } from "react-router-dom";

import { Sidebar, Header } from "@renderer/components";

export function Default() {
  return (
    <div className="h-screen w-screen text-rotion-100 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
