import * as Collapsible from "@radix-ui/react-collapsible";
import { Outlet } from "react-router-dom";

import { Sidebar, Header } from "@renderer/components";
import { useState } from "react";

export function Default() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Collapsible.Root
      defaultOpen
      className="h-screen w-screen text-rotion-100 flex"
      onOpenChange={setIsSidebarOpen}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
