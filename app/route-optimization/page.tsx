import { Metadata } from "next"
import { RouteOptimization } from "@/components/route-optimization"

export const metadata: Metadata = {
  title: "Route Optimization | Xdelivery",
  description: "Xdelivery Route Optimization",
}

export default function RouteOptimizationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Route Optimization</h1>
      <RouteOptimization />
    </div>
  )
}

