"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const currentDayEarnings = 1250.75
const targetEarnings = 1500
const averageEarnings = 1100
const currentDayExpenses = 450.25
const budgetLimit = 500

const expenseData = [
  { name: 'Fuel', value: 200 },
  { name: 'Maintenance', value: 150 },
  { name: 'Food', value: 75 },
  { name: 'Other', value: 25.25 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function DailySummary() {
  const earningsProgress = (currentDayEarnings / targetEarnings) * 100
  const expensesProgress = (currentDayExpenses / budgetLimit) * 100

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Current Day Earnings</CardTitle>
          <CardDescription>Real-time amount and target progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${currentDayEarnings.toFixed(2)}</div>
          <Progress value={earningsProgress} className="mt-2" />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <div>Progress: {earningsProgress.toFixed(1)}%</div>
            <div>Target: ${targetEarnings.toFixed(2)}</div>
          </div>
          <div className="mt-4 flex items-center">
            <Badge variant={currentDayEarnings > averageEarnings ? "default" : "destructive"}>
              {currentDayEarnings > averageEarnings ? "Above" : "Below"} Average
            </Badge>
            <span className="ml-2 text-sm text-muted-foreground">
              {Math.abs(((currentDayEarnings - averageEarnings) / averageEarnings) * 100).toFixed(1)}% difference
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Day Expenses</CardTitle>
          <CardDescription>Running total and budget status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${currentDayExpenses.toFixed(2)}</div>
          <Progress value={expensesProgress} className="mt-2" />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <div>Budget Used: {expensesProgress.toFixed(1)}%</div>
            <div>Limit: ${budgetLimit.toFixed(2)}</div>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={200}>
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
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

