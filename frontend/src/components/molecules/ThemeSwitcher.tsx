import { SunMoon, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { FC } from "react";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type Props = {
  isCollapsed: boolean;
};

const Component: FC<Props> = ({ isCollapsed }) => {
  const { setTheme } = useTheme();

  return (
    <div
      data-collapsed={isCollapsed}
      className="flex data-[collapsed=true]:hidden py-1 flex-col gap-2"
    >
      <Separator />
      <div className="flex items-center justify-evenly">
        <Button variant="ghost" size="lg" onClick={() => setTheme("system")}>
          <SunMoon className="h-[1.6rem] w-[1.6rem]" />
        </Button>
        <Separator orientation="vertical" />
        <Button variant="ghost" size="lg" onClick={() => setTheme("light")}>
          <Sun className="h-[1.6rem] w-[1.6rem]" />
        </Button>
        <Separator orientation="vertical" />
        <Button variant="ghost" size="lg" onClick={() => setTheme("dark")}>
          <Moon className="h-[1.6rem] w-[1.6rem]" />
        </Button>
      </div>
    </div>
  );
};

export default Component;