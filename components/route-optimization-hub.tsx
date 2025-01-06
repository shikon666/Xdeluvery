import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CurrentRouteAnalysis } from "./current-route-analysis"
import { RouteAlternatives } from "./route-alternatives"

export function RouteOptimizationHub() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="current" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="current">Current Route Analysis</TabsTrigger>
          <TabsTrigger value="alternatives">Route Alternatives</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="space-y-4">
          <CurrentRouteAnalysis />
        </TabsContent>
        <TabsContent value="alternatives" className="space-y-4">
          <RouteAlternatives />
        </TabsContent>
      </Tabs>
    </div>
  )
}

