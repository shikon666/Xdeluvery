"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const revenueData = [
  { day: "Mon", earnings: 120 },
  { day: "Tue", earnings: 150 },
  { day: "Wed", earnings: 180 },
  { day: "Thu", earnings: 200 },
  { day: "Fri", earnings: 250 },
  { day: "Sat", earnings: 300 },
  { day: "Sun", earnings: 280 },
]

const peakHoursData = [
  { hour: "6AM", earnings: 50 },
  { hour: "9AM", earnings: 80 },
  { hour: "12PM", earnings: 120 },
  { hour: "3PM", earnings: 90 },
  { hour: "6PM", earnings: 150 },
  { hour: "9PM", earnings: 100 },
]

const expenseData = [
  { name: "Fuel", value: 400 },
  { name: "Maintenance", value: 300 },
  { name: "Insurance", value: 200 },
  { name: "Other", value: 100 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function FinancialAnalytics() {
  const [timeRange, setTimeRange] = useState('week')

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Revenue Insights</CardTitle>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Peak Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={peakHoursData}>
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earnings" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cost Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Spending Alerts</h4>
              <div className="space-y-2">
                <Badge variant="destructive" className="w-full justify-start">Fuel expenses 15% above average</Badge>
                <Badge variant="default" className="w-full justify-start">Maintenance costs within budget</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Optimization Suggestions</h4>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Consider fuel-efficient route planning</li>
                <li>Schedule preventive maintenance to reduce costs</li>
                <li>Review insurance options for better rates</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

