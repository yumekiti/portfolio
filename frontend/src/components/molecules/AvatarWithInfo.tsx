import { FC } from "react"
import { Link } from "react-router-dom"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
  profile: {
    name: string
    avatar: string
    description: string
  }
  isCollapsed: boolean
};

const Component: FC<Props> = ({ profile, isCollapsed }) => {
  return (
    <div className={`flex items-center ${isCollapsed ? "justify-center" : "px-2"}`}>
      {isCollapsed ? (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              to="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-full w-full py-2",
              )}
            >
              <Avatar className="w-8 h-8 border">
                <AvatarImage src={profile.avatar} alt="avatar" />
                <AvatarFallback>{profile.name[0]}</AvatarFallback>
              </Avatar>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="flex items-center gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src={profile.avatar} alt="avatar" />
              <AvatarFallback>{profile.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-base font-bold">{profile.name}</h1>
              <p className="text-muted-foreground text-sm">{profile.description}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Link
          to="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "h-full w-full gap-2 py-2 flex justify-start items-center px-2 whitespace-pre-wrap",
          )}
        >
          <Avatar className="w-14 h-14 border">
            <AvatarImage src={profile.avatar} alt="avatar" />
            <AvatarFallback>{profile.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{profile.name}</h1>
            <p className="text-muted-foreground text-sm">{profile.description}</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Component;