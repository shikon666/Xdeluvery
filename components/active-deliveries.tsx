import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const deliveries = [
  { id: 1, status: "In Transit", priority: "High", destination: "123 Main St" },
  { id: 2, status: "Arrived at Location", priority: "Medium", destination: "456 Elm St" },
  { id: 3, status: "Waiting for Pickup", priority: "Standard", destination: "789 Oak St" },
  { id: 4, status: "In Transit", priority: "High", destination: "321 Pine St" },
  { id: 5, status: "Waiting for Delivery", priority: "Standard", destination: "654 Maple St" },
]

const priorityColors = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Standard: "bg-green-500",
}

export function ActiveDeliveries() {
  const totalDeliveries = deliveries.length
  const inTransit = deliveries.filter(d => d.status === "In Transit").length
  const arrived = deliveries.filter(d => d.status === "Arrived at Location").length
  const waiting = deliveries.filter(d => d.status.startsWith("Waiting")).length

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Active Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalDeliveries}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inTransit}</div>
            <Progress value={(inTransit / totalDeliveries) * 100} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Arrived at Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{arrived}</div>
            <Progress value={(arrived / totalDeliveries) * 100} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Waiting for Pickup/Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{waiting}</div>
            <Progress value={(waiting / totalDeliveries) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Active Deliveries Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deliveries.map(delivery => (
              <div key={delivery.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <div className="font-semibold">Delivery #{delivery.id}</div>
                  <div className="text-sm text-gray-500">{delivery.destination}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{delivery.status}</Badge>
                  <Badge className={priorityColors[delivery.priority]}>{delivery.priority}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

