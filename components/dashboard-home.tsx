"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FinancialOverview } from "@/components/financial-overview"
import { DeliveryIntelligence } from "@/components/delivery-intelligence"
import { RouteManagement } from "@/components/route-management"
import { RouteOptimizationHub } from "@/components/route-optimization-hub"

export default function DashboardHome() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
          <TabsTrigger value="route">Route</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <FinancialOverview />
        </TabsContent>
        <TabsContent value="delivery" className="space-y-4">
          <DeliveryIntelligence />
        </TabsContent>
        <TabsContent value="route" className="space-y-4">
          <RouteManagement />
        </TabsContent>
        <TabsContent value="optimization" className="space-y-4">
          <RouteOptimizationHub />
        </TabsContent>
      </Tabs>
    </div>
  )
}

