"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const dailyStats = {
  completed: 45,
  total: 50,
  successPercentage: 90,
  failedReasons: [
    { reason: "Customer not available", count: 2 },
    { reason: "Wrong address", count: 1 },
    { reason: "Package damaged", count: 1 },
    { reason: "Other", count: 1 },
  ]
}

const timePerformance = {
  onTimeRate: 92,
  averageTime: 28,
  distribution: [
    { name: "Early", value: 10 },
    { name: "On Time", value: 82 },
    { name: "Late", value: 8 },
  ]
}

export function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Daily Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Completed vs. Total</span>
                <span>{dailyStats.completed} / {dailyStats.total}</span>
              </div>
              <Progress value={(dailyStats.completed / dailyStats.total) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Success Percentage</span>
                <span>{dailyStats.successPercentage}%</span>
              </div>
              <Progress value={dailyStats.successPercentage} className="h-2" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Failed Delivery Reasons</h4>
              {dailyStats.failedReasons.map((reason, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{reason.reason}</span>
                  <span>{reason.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Time Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>On-time Delivery Rate</span>
                <span>{timePerformance.onTimeRate}%</span>
              </div>
              <Progress value={timePerformance.onTimeRate} className="h-2" />
            </div>
            <div>
              <span className="font-semibold">Average Delivery Time: </span>
              <span>{timePerformance.averageTime} minutes</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timePerformance.distribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

