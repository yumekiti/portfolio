import { FC, ReactNode, useState } from "react";

import { cn } from "@/lib/utils";
import Logo from "@/components/atoms/Logo";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigations from "@/components/organisms/Navigations";
import { navItems } from "@/constants/nav";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

type Prop = {
  children: ReactNode;
};

const Component: FC<Prop> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
          {/* <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
            <Logo />
            <div className="flex gap-4 items-center">
              <ThemeSwitcher />
            </div>
          </nav> */}
          <main className="h-screen flex w-full flex-grow">
            <ResizablePanelGroup
              direction="horizontal"
            >
              <ResizablePanel
                minSize={14}
                maxSize={20}
                collapsible={true}
                onCollapse={() => setIsCollapsed(true)}
                onExpand={() => setIsCollapsed(false)}
                className={cn(isCollapsed && "min-w-[60px] transition-all duration-300 ease-in-out")}
              >
                <Navigations isCollapsed={isCollapsed} links={navItems} />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel className="h-full bg-gray-100 dark:bg-gray-800">
                {children}
              </ResizablePanel>
            </ResizablePanelGroup>
          </main>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Component;