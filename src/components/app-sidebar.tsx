'use client'
import { Calendar, Home, Inbox, Search, Settings,Target,Music, User,Youtube} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useState} from 'react'
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
title:"Workspace",
url:"#",
icon: Target
  },
  {
    title:"Music",
    url:"#",
    icon: Music
      },
      {
        title:"User",
        url:"#",
        icon: User
          },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Youtube",
    url: "#",
    icon: Youtube,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
    const [activeButton, setActiveButton] = useState("Home");
    console.log(activeButton);
  return (
    <Sidebar className="w-15 " collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex border-solid h-full" >
              {items.map((item) => (
                <SidebarMenuItem className="my-2" key={item.title}>
                  <SidebarMenuButton asChild>

             <a href={item.url} className='text-center' onClick={()=> setActiveButton(item.title)} style={{ padding: '27px 25px',
                borderRadius: '10px', backgroundColor: item.title === activeButton ?'#1bb96c':"#f1f1f6",color:item.title === activeButton ?'white':"black"}} >
                       <item.icon  />
            
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
