import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SunMoon, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Component = () => {
  const { setTheme } = useTheme();

  return (
    <Tabs>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <SunMoon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default Component;