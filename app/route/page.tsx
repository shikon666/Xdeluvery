import { Metadata } from "next"
import { RouteManagement } from "@/components/route-management"

export const metadata: Metadata = {
  title: "Route Management | Xdelivery",
  description: "Xdelivery Route Management and Navigation",
}

export default function RoutePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Route Management</h1>
      <RouteManagement />
    </div>
  )
}

