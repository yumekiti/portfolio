import { Home, Twitter, FilePenLine, Layers, History, AppWindow, Github, Instagram } from "lucide-react";
import { Links } from "@/types/links";

export const navLinks: Links = [
  {
    title: "Home",
    icon: Home,
    variant: "default",
    path: "/",
  },
  {
    title: "Writing",
    icon: FilePenLine,
    variant: "ghost",
    path: "/writing",
  },
  {
    title: "Stack",
    icon: Layers,
    variant: "ghost",
    path: "/stack",
  },
  {
    title: "Timeline",
    icon: History,
    variant: "ghost",
    path: "/timeline",
  },
  {
    title: "Portfolio",
    icon: AppWindow,
    variant: "ghost",
    path: "/portfolio",
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
  {
    title: "GitHub",
    icon: Github,
    variant: "ghost",
    path: "https://github.com/yumekiti",
    external: true,
  },
  {
    title: "Instagram",
    icon: Instagram,
    variant: "ghost",
    path: "https://www.instagram.com/yumekiti1204",
    external: true,
  }
];