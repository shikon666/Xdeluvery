import { Metadata } from "next"
import { RouteOptimizationHub } from "@/components/route-optimization-hub"

export const metadata: Metadata = {
  title: "Route Optimization | Xdelivery",
  description: "Xdelivery Route Optimization and Analysis",
}

export default function OptimizationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Route Optimization Hub</h1>
      <RouteOptimizationHub />
    </div>
  )
}

