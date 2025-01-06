"use client"

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MapView() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([51.505, -0.09], 13)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current)
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Route Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="map" style={{ height: '400px' }}></div>
      </CardContent>
    </Card>
  )
}

