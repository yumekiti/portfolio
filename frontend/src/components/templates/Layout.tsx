import { FC, ReactNode, memo, useState } from "react";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavigationMenu from "@/components/organisms/NavigationMenu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

type Prop = {
  children: ReactNode;
};

const Component: FC<Prop> = ({ children }) => {
  const [defaultSize, setDefaultSize] = useState<number>(localStorage.getItem("sidebarSize") ? Number(localStorage.getItem("sidebarSize")) : 18);
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(true);
  }

  const handleExpand = () => {
    setIsCollapsed(false);
  }

  const handleResize = (size: number) => {
    localStorage.setItem("sidebarSize", size.toString());
    setDefaultSize(size);
  }

  return (
    <div className="app h-screen flex flex-col">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
              direction="horizontal"
            >
              <ResizablePanel
                minSize={14}
                maxSize={18}
                defaultSize={defaultSize}
                collapsible={true}
                onCollapse={handleCollapse}
                onExpand={handleExpand}
                onResize={handleResize}
                className={cn(isCollapsed && "min-w-[60px] transition-all duration-300 ease-in-out")}
              >
                <NavigationMenu isCollapsed={isCollapsed} />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel>
                {children}
              </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
};

export default memo(Component);