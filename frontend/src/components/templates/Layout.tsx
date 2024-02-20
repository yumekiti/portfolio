import { FC, ReactNode } from "react";
import Logo from "@/components/atoms/Logo";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

type Prop = {
  children: ReactNode;
};

const Component: FC<Prop> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
          <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
            <Logo />
            <div className="flex gap-4 items-center">
              <ThemeSwitcher />
            </div>
          </nav>
          <main className="h-screen flex w-full flex-grow">{children}</main>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Component;