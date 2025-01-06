import { Metadata } from "next"
import { FinancialOverview } from "@/components/financial-overview"

export const metadata: Metadata = {
  title: "Financial Overview | Xdelivery",
  description: "Xdelivery Financial Overview and Analytics",
}

export default function FinancialOverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Financial Overview</h1>
      <FinancialOverview />
    </div>
  )
}

