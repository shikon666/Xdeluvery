"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const initialEarnings = 450.75
const dailyTarget = 800
const sevenDayAverage = 650

const expenseData = [
  { category: "Fuel", amount: 75 },
  { category: "Maintenance", amount: 25 },
  { category: "Food", amount: 15 },
  { category: "Other", amount: 10 },
]

export function TodaySummary() {
  const [currentEarnings, setCurrentEarnings] = useState(initialEarnings)
  const [tips, setTips] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEarnings(prev => prev + Math.random() * 2)
      setTips(prev => prev + Math.random())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const progress = (currentEarnings / dailyTarget) * 100
  const projectedEod = currentEarnings * (24 / new Date().getHours())
  const comparisonWithAverage = ((currentEarnings - sevenDayAverage) / sevenDayAverage) * 100

  const totalExpenses = expenseData.reduce((sum, item) => sum + item.amount, 0)
  const remainingBudget = 200 - totalExpenses // Assuming daily budget of $200

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Earnings Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${currentEarnings.toFixed(2)}</div>
          <Progress value={progress} className="mt-2" />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <div>Progress: {progress.toFixed(1)}%</div>
            <div>Target: ${dailyTarget.toFixed(2)}</div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span>Tips</span>
              <Badge variant="secondary">${tips.toFixed(2)}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Projected EOD</span>
              <Badge variant="outline">${projectedEod.toFixed(2)}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>vs 7-day Avg</span>
              <Badge variant={comparisonWithAverage >= 0 ? "default" : "destructive"}>
                {comparisonWithAverage >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {Math.abs(comparisonWithAverage).toFixed(1)}%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Monitor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">Total Expenses Today</div>
            </div>
            <div className="space-y-2">
              {expenseData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.category}</span>
                  <Badge variant="outline">${item.amount.toFixed(2)}</Badge>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t">
              <div className="flex justify-between items-center">
                <span>Remaining Budget</span>
                <Badge variant={remainingBudget >= 0 ? "default" : "destructive"}>
                  ${Math.abs(remainingBudget).toFixed(2)}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expenseData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

