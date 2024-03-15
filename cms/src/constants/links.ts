import { Home, Twitter, FilePenLine, Layers, History, AppWindow, Github, Instagram } from "lucide-react";
import { Links } from "@/types/links";

export const navLinks: Links = [
  {
    title: "Writing",
    icon: FilePenLine,
    path: "/",
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
