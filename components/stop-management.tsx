"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, CheckCircle, PhoneCall, MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const initialStops = [
  { id: 1, address: "123 Main St, Anytown, USA", status: "Pending", priority: "High" },
  { id: 2, address: "456 Elm St, Somewhere, USA", status: "Completed", priority: "Medium" },
  { id: 3, address: "789 Oak St, Nowhere, USA", status: "In Progress", priority: "Low" },
  { id: 4, address: "321 Pine St, Everywhere, USA", status: "Pending", priority: "High" },
  { id: 5, address: "654 Maple St, Anywhere, USA", status: "Pending", priority: "Medium" },
]

const priorityColors = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
}

export function StopManagement() {
  const [stops, setStops] = useState(initialStops)

  const handleStatusUpdate = (id: number, newStatus: string) => {
    setStops(stops.map(stop => 
      stop.id === id ? { ...stop, status: newStatus } : stop
    ))
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Stop Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
            Interactive Map Placeholder
          </div>
          <div className="space-y-4">
            {stops.map((stop) => (
              <div key={stop.id} className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center space-x-2">
                  <Badge className={priorityColors[stop.priority]}>{stop.priority}</Badge>
                  <div>
                    <p className="font-medium">{stop.address}</p>
                    <p className="text-sm text-muted-foreground">{stop.status}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleStatusUpdate(stop.id, "Completed")}>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Complete
                  </Button>
                  <Button size="sm" variant="outline">
                    <PhoneCall className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline"><MoreVertical className="h-4 w-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleStatusUpdate(stop.id, "In Progress")}>
                        Mark In Progress
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(stop.id, "Pending")}>
                        Mark Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Remove Stop</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

