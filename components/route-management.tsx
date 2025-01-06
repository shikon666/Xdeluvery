import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActiveNavigation } from "./active-navigation"
import { StopManagement } from "./stop-management"

export function RouteManagement() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Active Navigation</TabsTrigger>
          <TabsTrigger value="stops">Stop Management</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <ActiveNavigation />
        </TabsContent>
        <TabsContent value="stops" className="space-y-4">
          <StopManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}

