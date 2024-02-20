import { Home, File, Send, ArchiveX, Trash2, Archive } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface NavProps {
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
  }[]
}

export const navItems: NavProps["links"] = [
  {
    title: "Home",
    icon: Home,
    variant: "default",
  },
  {
    title: "Drafts",
    icon: File,
    variant: "ghost",
  },
  {
    title: "Sent",
    icon: Send,
    variant: "ghost",
  },
  {
    title: "Junk",
    icon: ArchiveX,
    variant: "ghost",
  },
  {
    title: "Trash",
    icon: Trash2,
    variant: "ghost",
  },
  {
    title: "Archive",
    icon: Archive,
    variant: "ghost",
  },
]