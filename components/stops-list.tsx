import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const stops = [
  { id: 1, address: "123 Main St", startTime: "09:00", endTime: "10:00", instructions: "Leave at door" },
  { id: 2, address: "456 Elm St", startTime: "10:30", endTime: "11:30", instructions: "Signature required" },
  { id: 3, address: "789 Oak St", startTime: "12:00", endTime: "13:00", instructions: "Call upon arrival" },
]

export function StopsList() {
  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader>
        <CardTitle>Stops List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Time Window</TableHead>
              <TableHead>Instructions</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stops.map((stop) => (
              <TableRow key={stop.id}>
                <TableCell>{stop.address}</TableCell>
                <TableCell>{stop.startTime} - {stop.endTime}</TableCell>
                <TableCell>{stop.instructions}</TableCell>
                <TableCell>
                  <Button variant="outline" className="mr-2">Edit</Button>
                  <Button variant="destructive">Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

