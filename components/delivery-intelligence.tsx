import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActiveDeliveries } from "./active-deliveries"
import { TimeManagement } from "./time-management"
import { PerformanceAnalytics } from "./performance-analytics"
import { CustomerExperience } from "./customer-experience"

export function DeliveryIntelligence() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Delivery Intelligence Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active Deliveries</TabsTrigger>
              <TabsTrigger value="time">Time Management</TabsTrigger>
              <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
              <TabsTrigger value="customer">Customer Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <ActiveDeliveries />
            </TabsContent>
            <TabsContent value="time">
              <TimeManagement />
            </TabsContent>
            <TabsContent value="performance">
              <PerformanceAnalytics />
            </TabsContent>
            <TabsContent value="customer">
              <CustomerExperience />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

