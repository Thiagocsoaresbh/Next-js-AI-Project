"use client"

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true);
  const closeSidebar = () => {

  }
  
  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        >

      </Sidebar>
      <section className="flex flex-col w-full text-white/75">
        ...
      </section>
    </main>
  );
}

export default Page;