"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const routeMetrics = {
  totalDistance: 45.7,
  estimatedDuration: 72,
  fuelConsumption: 3.8,
}

const costBreakdown = [
  { name: 'Fuel', value: 15.20, color: '#0088FE' },
  { name: 'Time', value: 36.00, color: '#00C49F' },
  { name: 'Operating', value: 22.80, color: '#FFBB28' },
]

export function CurrentRouteAnalysis() {
  const totalCost = costBreakdown.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Route Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Distance</span>
              <Badge variant="secondary">{routeMetrics.totalDistance} km</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Estimated Duration</span>
              <Badge variant="secondary">{routeMetrics.estimatedDuration} min</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Fuel Consumption</span>
              <Badge variant="secondary">{routeMetrics.fuelConsumption} L</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cost Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={costBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {costBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <span className="text-lg font-semibold">Total Cost: ${totalCost.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

