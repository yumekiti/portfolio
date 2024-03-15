import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FC } from "react"
import { Links } from "@/types/links"
import { ExternalLink } from "lucide-react"

type Props = {
  links: Links
  isCollapsed: boolean
}

const Component: FC<Props> = ({ links, isCollapsed }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      {links.map((link, index) =>
        isCollapsed ? (
          <Tooltip key={index} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                to={link.path}
                className={cn(
                  buttonVariants({ variant: currentPath === link.path ? "default" : "ghost", size: "sm" }),
                  "h-9 w-9",
                  currentPath === link.path &&
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
                target={link.external ? "_blank" : undefined}
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
            to={link.path}
            className={cn(
              buttonVariants({ variant: currentPath === link.path ? "default" : "ghost", size: "sm" }),
              currentPath === link.path &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            )}
            target={link.external ? "_blank" : undefined}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
            {link.label && (
              <span
              className={cn(
                "ml-auto",
                currentPath === link.path &&
                  "text-background dark:text-white"
                )}
                >
                {link.label}
              </span>
            )}
            {link.external && (
              <div className="ml-auto">
                <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            )}
          </Link>
        )
      )}
    </nav>
  )
}

export default Component;