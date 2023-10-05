"use client"

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true);
  const closeSidebar = () => {
    setSidebarOpened(false);
  }
  
  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        >

      </Sidebar>
      <section className="flex flex-col w-full text-white/75">
        <button onClick={() => setSidebarOpened(true)}>Abrir</button>
      </section>
    </main>
  );
}

export default Page;