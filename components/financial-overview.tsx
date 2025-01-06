"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TodaySummary } from "./today-summary"
import { FinancialAnalytics } from "./financial-analytics"

export function FinancialOverview() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="today" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="today">Today's Summary</TabsTrigger>
          <TabsTrigger value="analytics">Financial Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="space-y-4">
          <TodaySummary />
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <FinancialAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  )
}

