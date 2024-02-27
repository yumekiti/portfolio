import { Home, File, Twitter } from "lucide-react";
import { Links } from "@/types/links";

export const navLinks: Links = [
  {
    title: "Home",
    icon: Home,
    variant: "default",
    path: "/",
  },
  {
    title: "Drafts",
    icon: File,
    variant: "ghost",
    path: "/drafts",
  },
]

export const socialsLinks: Links = [
  {
    title: "Twitter",
    icon: Twitter,
    variant: "ghost",
    path: "https://twitter.com/yumekiti1204",
    external: true,
  },
];