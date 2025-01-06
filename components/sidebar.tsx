"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, Truck, MapPin, Settings, Route } from 'lucide-react'

const sidebarItems = [
{ name: "Dashboard", href: "/", icon: BarChart },
{ name: "Delivery Intelligence", href: "/delivery", icon: Truck },
{ name: "Route Management", href: "/route", icon: MapPin },
{ name: "Route Optimization", href: "/route-optimization", icon: Route },
{ name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
const pathname = usePathname()

return (
  <div className="flex h-full w-64 flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
    <div className="flex h-14 items-center border-b px-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Truck className="h-6 w-6" />
        <span>Xdelivery</span>
      </Link>
    </div>
    <ScrollArea className="flex-1">
      <nav className="flex flex-col gap-2 p-4">
        {sidebarItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn("justify-start", pathname === item.href && "bg-gray-200 dark:bg-gray-700")}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          </Button>
        ))}
      </nav>
    </ScrollArea>
  </div>
)
}

