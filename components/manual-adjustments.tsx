import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function ManualAdjustments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manual Adjustments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Exclude Routes</h3>
          <div className="flex items-center space-x-2">
            <Switch id="avoid-tolls" />
            <Label htmlFor="avoid-tolls">Avoid Toll Roads</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="avoid-highways" />
            <Label htmlFor="avoid-highways">Avoid Highways</Label>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Optimize from Current Location</h3>
          <Button>Optimize Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}

