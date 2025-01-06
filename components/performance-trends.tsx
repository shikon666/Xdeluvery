"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const earningsData = [
  { name: 'Mon', earnings: 1000, expenses: 700 },
  { name: 'Tue', earnings: 1200, expenses: 800 },
  { name: 'Wed', earnings: 1100, expenses: 750 },
  { name: 'Thu', earnings: 1300, expenses: 900 },
  { name: 'Fri', earnings: 1500, expenses: 950 },
  { name: 'Sat', earnings: 1800, expenses: 1100 },
  { name: 'Sun', earnings: 1600, expenses: 1000 },
]

const expenseCategories = [
  { name: 'Fuel', percentage: 40 },
  { name: 'Maintenance', percentage: 30 },
  { name: 'Food', percentage: 20 },
  { name: 'Other', percentage: 10 },
]

export function PerformanceTrends() {
  const [timeRange, setTimeRange] = useState('week')

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Earnings Graph</CardTitle>
          <CardDescription>Visualize earning patterns and peak periods</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px] mb-4">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Analysis</CardTitle>
          <CardDescription>Category breakdown and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Expense Categories</h4>
            {expenseCategories.map((category, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>{category.name}</span>
                <span>{category.percentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cost Optimization Tips</CardTitle>
          <CardDescription>Suggestions to reduce expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Plan routes efficiently to minimize fuel consumption</li>
            <li>Perform regular vehicle maintenance to prevent costly repairs</li>
            <li>Use fuel-efficient driving techniques</li>
            <li>Compare prices for supplies and services</li>
            <li>Consider bulk purchasing for frequently used items</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

