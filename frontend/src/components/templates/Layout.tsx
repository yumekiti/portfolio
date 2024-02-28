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
import { ScrollArea } from "@/components/ui/scroll-area"

type Prop = {
  children: ReactNode;
};

const Component: FC<Prop> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delayDuration={0}>
        <div className="flex h-screen">
          {/* <nav className="flex justify-between items-center border-b border-border px-4 py-2">
            <Logo />
            <div className="flex gap-4 items-center">
              <ThemeSwitcher />
            </div>
          </nav> */}
          <ResizablePanelGroup
            direction="horizontal"
          >
            <ResizablePanel
              minSize={14}
              maxSize={18}
              collapsible={true}
              onCollapse={() => setIsCollapsed(true)}
              onExpand={() => setIsCollapsed(false)}
              className={cn(isCollapsed && "min-w-[60px] transition-all duration-300 ease-in-out")}
            >
              <NavigationMenu isCollapsed={isCollapsed} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="bg-gray-100 dark:bg-gray-800">
              <ScrollArea className="h-full">
                {children}
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default memo(Component);