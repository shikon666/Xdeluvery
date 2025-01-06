import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const timeSlots = [
  { id: 1, time: "10:00 AM - 11:00 AM", deliveries: 3, status: "Next" },
  { id: 2, time: "11:00 AM - 12:00 PM", deliveries: 2, status: "Upcoming" },
  { id: 3, time: "12:00 PM - 1:00 PM", deliveries: 4, status: "Upcoming" },
  { id: 4, time: "1:00 PM - 2:00 PM", deliveries: 1, status: "Upcoming" },
]

const activeRoutes = [
  { id: 1, driver: "John Doe", progress: 75, eta: "10 mins", delay: false },
  { id: 2, driver: "Jane Smith", progress: 40, eta: "25 mins", delay: true },
  { id: 3, driver: "Bob Johnson", progress: 90, eta: "5 mins", delay: false },
]

export function TimeManagement() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Delivery Windows</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeSlots.map(slot => (
              <div key={slot.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <div className="font-semibold">{slot.time}</div>
                  <div className="text-sm text-gray-500">{slot.deliveries} deliveries</div>
                </div>
                <Badge variant={slot.status === "Next" ? "default" : "outline"}>{slot.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>ETA Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeRoutes.map(route => (
              <div key={route.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{route.driver}</div>
                  <div className="flex items-center space-x-2">
                    <span>ETA: {route.eta}</span>
                    {route.delay && <Badge variant="destructive">Delayed</Badge>}
                  </div>
                </div>
                <Progress value={route.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

