"use client"

import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator";
import { profile } from "@/constants/profile"

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
  }[]
}

const Component = ({ links, isCollapsed }: NavProps) => {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-2 data-[collapsed=true]:gap-4 data-[collapsed=true]:py-4 px-2"
    >
      {/* 自己紹介 */}
      <div className={`flex items-center ${isCollapsed ? "justify-center" : "px-2"}`}>
        {isCollapsed ? (
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-full w-full py-2",
                )}
              >
                <img
                  src={profile.avatar}
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              <img
                src={profile.avatar}
                alt="avatar"
                className="rounded-full w-10 h-10"
              />
              <div>
                <h1 className="text-lg font-bold">{profile.name}</h1>
                <p className="text-muted-foreground text-sm">{profile.description}</p>
              </div>
            </TooltipContent>
          </Tooltip>
        ) : (
          <Link
            to="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-full w-full gap-2 py-4 flex justify-start items-center px-2",
            )}
          >
            <img
              src={profile.avatar}
              alt="avatar"
              className="rounded-full w-16 h-16"
            />
            <div>
              <h1 className="text-lg font-bold">{profile.name}</h1>
              <p className="text-muted-foreground text-sm">{profile.description}</p>
            </div>
          </Link>
        )}
      </div>
      {/* サイト内リンク */}
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  to="#"
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              to="#"
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
      <Separator />
    </div>
  )
}

export default Component