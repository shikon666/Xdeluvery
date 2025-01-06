"use client"

import { AddDeliveries } from "./add-deliveries"
import { MapView } from "./map-view"
import { StopsList } from "./stops-list"
import { ManualAdjustments } from "./manual-adjustments"

export function RouteOptimization() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-4">
        <AddDeliveries />
        <StopsList />
      </div>
      <div className="space-y-4">
        <MapView />
        <ManualAdjustments />
      </div>
    </div>
  )
}

