import { LucideIcon } from "lucide-react";

export type Link = {
  title: string
  label?: string
  icon: LucideIcon
  path: string
  external?: boolean
}

export type Links = Link[]