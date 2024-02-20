import { useState } from "react";
import Layout from "@/components/templates/Layout";
import Nav from "@/components/organisms/Nav";
import { Separator } from "@/components/ui/separator";

import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const Component = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <Layout>
      <ResizablePanelGroup
        direction="horizontal"
      >
        <ResizablePanel
          minSize={10}
          maxSize={20}
          collapsible={true}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(isCollapsed && "min-w-[60px] transition-all duration-300 ease-in-out")}
        >
          <Nav isCollapsed={isCollapsed} links={navItems} />
          <Separator />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="h-full bg-gray-100 dark:bg-gray-800">
          <h1 className="text-3xl font-bold text-center mt-8">
            Main Content
          </h1>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Layout>
  );
};

export default Component;