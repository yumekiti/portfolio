"use client"

import { Separator } from "@/components/ui/separator";
import AvatarWithInfo from "@/components/molecules/AvatarWithInfo"
import SiteLinks from "@/components/molecules/SiteLinks"

import { socialsLinks, navLinks } from "@/constants/links";
import { profile } from "@/constants/profile"
import { FC } from "react";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";

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
        <AvatarWithInfo profile={profile} isCollapsed={isCollapsed} />
        <SiteLinks links={navLinks} isCollapsed={isCollapsed} />
        <Separator />
        <SiteLinks links={socialsLinks} isCollapsed={isCollapsed} />
      </div>
      <ThemeSwitcher isCollapsed={isCollapsed} />
    </div>
  )
}

export default Component