import { Home, Twitter, FilePenLine, Layers, History, AppWindow, Github, Instagram } from "lucide-react";
import { Links } from "@/types/links";

export const navLinks: Links = [
  {
    title: "Home",
    icon: Home,
    path: "/",
  },
  {
    title: "Writing",
    icon: FilePenLine,
    path: "/writing",
  },
  {
    title: "Stack",
    icon: Layers,
    path: "/stack",
  },
  {
    title: "Timeline",
    icon: History,
    path: "/timeline",
  },
  {
    title: "Portfolio",
    icon: AppWindow,
    path: "/portfolio",
  },
]

export const socialsLinks: Links = [
  {
    title: "Twitter",
    icon: Twitter,
    path: "https://twitter.com/yumekiti1204",
    external: true,
  },
  {
    title: "GitHub",
    icon: Github,
    path: "https://github.com/yumekiti",
    external: true,
  },
  {
    title: "Instagram",
    icon: Instagram,
    path: "https://www.instagram.com/yumekiti1204",
    external: true,
  }
];