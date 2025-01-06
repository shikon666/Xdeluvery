import { Metadata } from "next"
import { DeliveryIntelligence } from "@/components/delivery-intelligence"

export const metadata: Metadata = {
  title: "Delivery Intelligence | Xdelivery",
  description: "Xdelivery Delivery Intelligence",
}

export default function DeliveryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Delivery Intelligence</h1>
      <DeliveryIntelligence />
    </div>
  )
}

