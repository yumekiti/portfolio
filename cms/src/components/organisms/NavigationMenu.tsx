import { FC } from "react";
import { navLinks } from "@/constants/links";

import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import SiteLinks from "@/components/molecules/SiteLinks"

interface NavProps {
  isCollapsed: boolean
}

const Component: FC<NavProps> = ({ isCollapsed }) => {
  return (
    <div className="flex justify-between flex-col h-full">
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col py-2 gap-2 data-[collapsed=true]:gap-4 data-[collapsed=true]:py-4 px-2"
      >
        <SiteLinks links={navLinks} isCollapsed={isCollapsed} />
      </div>
      <ThemeSwitcher isCollapsed={isCollapsed} />
    </div>
  )
}

export default Component