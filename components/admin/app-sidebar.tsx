"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { 
  Music, 
  Calendar, 
  FileText, 
  Image as ImageIcon, 
  BarChart3, 
  Settings, 
  Users,
  Home,
  LogOut
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const items = [
  {
    title: "Tableau de bord",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Musique",
    url: "/admin/music",
    icon: Music,
  },
  {
    title: "Événements",
    url: "/admin/events",
    icon: Calendar,
  },
  {
    title: "Pages",
    url: "/admin/pages",
    icon: FileText,
  },
  {
    title: "Galerie",
    url: "/admin/gallery",
    icon: ImageIcon,
  },
  {
    title: "Utilisateurs",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Statistiques",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Paramètres",
    url: "/admin/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-primary">
            Tomorrow's Generation
          </h2>
          <p className="text-sm text-muted-foreground">
            Panneau d'administration
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Retour au site
            </Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
