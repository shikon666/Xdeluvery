"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const routeOptions = [
  { name: 'Time-Optimized', time: 65, distance: 48.2, cost: 78.50, fuel: 4.1 },
  { name: 'Distance-Optimized', time: 72, distance: 45.7, cost: 74.00, fuel: 3.8 },
  { name: 'Cost-Optimized', time: 75, distance: 47.1, cost: 71.80, fuel: 3.9 },
]

const trafficData = [
  { time: '6AM', congestion: 20 },
  { time: '9AM', congestion: 60 },
  { time: '12PM', congestion: 40 },
  { time: '3PM', congestion: 30 },
  { time: '6PM', congestion: 80 },
  { time: '9PM', congestion: 50 },
]

export function RouteAlternatives() {
  const [selectedRoute, setSelectedRoute] = useState(routeOptions[0])

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Smart Options</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="time" onValueChange={(value) => setSelectedRoute(routeOptions.find(r => r.name.toLowerCase().startsWith(value)) || routeOptions[0])}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="time">Time</TabsTrigger>
              <TabsTrigger value="distance">Distance</TabsTrigger>
              <TabsTrigger value="cost">Cost</TabsTrigger>
            </TabsList>
            <TabsContent value="time" className="space-y-4">
              <RouteDetails route={routeOptions[0]} />
            </TabsContent>
            <TabsContent value="distance" className="space-y-4">
              <RouteDetails route={routeOptions[1]} />
            </TabsContent>
            <TabsContent value="cost" className="space-y-4">
              <RouteDetails route={routeOptions[2]} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Trade-off Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Time vs. Distance</span>
                <span>{(selectedRoute.time / selectedRoute.distance).toFixed(2)} min/km</span>
              </div>
              <Progress value={(selectedRoute.time / selectedRoute.distance) * 10} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Cost vs. Speed</span>
                <span>${(selectedRoute.cost / (selectedRoute.distance / selectedRoute.time * 60)).toFixed(2)} per km/h</span>
              </div>
              <Progress value={(selectedRoute.cost / (selectedRoute.distance / selectedRoute.time * 60)) * 10} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Fuel vs. Distance</span>
                <span>{(selectedRoute.fuel / selectedRoute.distance).toFixed(2)} L/km</span>
              </div>
              <Progress value={(selectedRoute.fuel / selectedRoute.distance) * 20} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="congestion" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            <Badge variant="outline" className="w-full justify-start">Peak Hours: 9AM, 6PM</Badge>
            <Badge variant="outline" className="w-full justify-start">Construction Zone: 3PM-7PM on Main St</Badge>
            <Badge variant="outline" className="w-full justify-start">Event Impact: Concert at 8PM, expect delays</Badge>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span>Congestion Score:</span>
              <Badge variant="secondary">7.5/10</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Historical Pattern:</span>
              <Badge variant="secondary">Above Average</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Real-time Status:</span>
              <Badge variant="destructive">Heavy Traffic</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function RouteDetails({ route }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span>Time</span>
        <Badge variant="secondary">{route.time} min</Badge>
      </div>
      <div className="flex justify-between items-center">
        <span>Distance</span>
        <Badge variant="secondary">{route.distance} km</Badge>
      </div>
      <div className="flex justify-between items-center">
        <span>Cost</span>
        <Badge variant="secondary">${route.cost.toFixed(2)}</Badge>
      </div>
      <div className="flex justify-between items-center">
        <span>Fuel Consumption</span>
        <Badge variant="secondary">{route.fuel} L</Badge>
      </div>
    </div>
  )
}

