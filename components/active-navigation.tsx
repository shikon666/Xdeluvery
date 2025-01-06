"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Truck, AlertTriangle, HardHat } from 'lucide-react'

const journeyStats = {
  distanceRemaining: 15.2,
  estimatedTimeToComplete: 45,
  stopsLeft: 5,
  completionPercentage: 60,
  nextStop: "123 Main St, Anytown, USA",
}

const trafficIncidents = [
  { type: "Accident", location: "Highway 101, Mile 25" },
  { type: "Construction", location: "Downtown, 5th Ave" },
]

export function ActiveNavigation() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Route Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center space-x-2">
              <Truck className="h-4 w-4" />
              <span>{journeyStats.distanceRemaining} km remaining</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{journeyStats.estimatedTimeToComplete} mins to complete</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{journeyStats.stopsLeft} stops left</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{journeyStats.completionPercentage}%</span>
            </div>
            <Progress value={journeyStats.completionPercentage} className="h-2" />
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Next Stop</h4>
            <p className="text-sm text-muted-foreground">{journeyStats.nextStop}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Traffic Intelligence</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
            Traffic Density Heat Map Placeholder
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Incidents</h4>
            {trafficIncidents.map((incident, index) => (
              <div key={index} className="flex items-center space-x-2">
                {incident.type === "Accident" ? (
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                ) : (
                  <HardHat className="h-4 w-4 text-yellow-500" />
                )}
                <span className="text-sm">{incident.type}: {incident.location}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Smart Routing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge variant="outline" className="w-full justify-start">Dynamic Route Updates Available</Badge>
            <Badge variant="outline" className="w-full justify-start">2 Time-saving Alternatives</Badge>
            <Badge variant="outline" className="w-full justify-start">Congestion Avoidance Active</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Offline Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Map Coverage:</span>
              <Badge variant="outline">92% Complete</Badge>
            </div>
            <div className="flex justify-between">
              <span>Storage Usage:</span>
              <Badge variant="outline">1.2 GB / 2 GB</Badge>
            </div>
            <div className="flex justify-between">
              <span>Last Sync:</span>
              <Badge variant="outline">2 hours ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

