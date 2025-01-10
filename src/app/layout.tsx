
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/ui/Navbar"

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      <SidebarProvider>
     
   <div className="flex min-h-screen">
     <AppSidebar/>
     <main className="flex-1">
     <Navbar/>
       {children}
     </main>  
   </div>
 </SidebarProvider>
      
      </body>
    </html>
  );
}
