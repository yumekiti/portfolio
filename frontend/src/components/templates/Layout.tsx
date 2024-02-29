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
import Logo from "@/components/atoms/Logo";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";

type Prop = {
  children: ReactNode;
};

const Component: FC<Prop> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="app h-screen flex flex-col">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider delayDuration={0}>
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