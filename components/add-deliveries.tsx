"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AddDeliveries() {
  const [deliveries, setDeliveries] = useState([])

  const addDelivery = (delivery) => {
    setDeliveries([...deliveries, delivery])
  }

  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader>
        <CardTitle>Add Deliveries</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="manual-single">
          <TabsList>
            <TabsTrigger value="manual-single">Single</TabsTrigger>
            <TabsTrigger value="manual-multiple">Multiple</TabsTrigger>
            <TabsTrigger value="import">Import</TabsTrigger>
          </TabsList>
          <TabsContent value="manual-single">
            <SingleDeliveryForm onAdd={addDelivery} />
          </TabsContent>
          <TabsContent value="manual-multiple">
            <MultipleDeliveriesForm onAdd={addDelivery} />
          </TabsContent>
          <TabsContent value="import">
            <ImportDeliveries onImport={setDeliveries} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function SingleDeliveryForm({ onAdd }) {
  const [address, setAddress] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [allDay, setAllDay] = useState(false)
  const [instructions, setInstructions] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ address, startTime, endTime, allDay, instructions })
    // Reset form
    setAddress("")
    setStartTime("")
    setEndTime("")
    setAllDay(false)
    setInstructions("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter delivery address"
          required
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <Label htmlFor="startTime">Start Time</Label>
          <Input
            id="startTime"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            disabled={allDay}
          />
        </div>
        <div>
          <Label htmlFor="endTime">End Time</Label>
          <Input
            id="endTime"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            disabled={allDay}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="allDay"
          checked={allDay}
          onCheckedChange={setAllDay}
        />
        <Label htmlFor="allDay">All Day</Label>
      </div>
      <div>
        <Label htmlFor="instructions">Delivery Instructions</Label>
        <Textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Enter any special instructions"
        />
      </div>
      <Button type="submit">Save Delivery</Button>
    </form>
  )
}

function MultipleDeliveriesForm({ onAdd }) {
  const [deliveries, setDeliveries] = useState([{ address: "", startTime: "", endTime: "", instructions: "" }])

  const addRow = () => {
    setDeliveries([...deliveries, { address: "", startTime: "", endTime: "", instructions: "" }])
  }

  const deleteRow = (index) => {
    setDeliveries(deliveries.filter((_, i) => i !== index))
  }

  const updateDelivery = (index, field, value) => {
    const updatedDeliveries = deliveries.map((delivery, i) => {
      if (i === index) {
        return { ...delivery, [field]: value }
      }
      return delivery
    })
    setDeliveries(updatedDeliveries)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    deliveries.forEach(onAdd)
    setDeliveries([{ address: "", startTime: "", endTime: "", instructions: "" }])
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Instructions</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveries.map((delivery, index) => (
            <TableRow key={index}>
              <TableCell>
                <Input
                  value={delivery.address}
                  onChange={(e) => updateDelivery(index, "address", e.target.value)}
                  placeholder="Enter address"
                  required
                />
              </TableCell>
              <TableCell>
                <Input
                  type="time"
                  value={delivery.startTime}
                  onChange={(e) => updateDelivery(index, "startTime", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  type="time"
                  value={delivery.endTime}
                  onChange={(e) => updateDelivery(index, "endTime", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={delivery.instructions}
                  onChange={(e) => updateDelivery(index, "instructions", e.target.value)}
                  placeholder="Instructions"
                />
              </TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => deleteRow(index)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={addRow} type="button">Add Row</Button>
      <Button type="submit">Save Deliveries</Button>
    </form>
  )
}

function ImportDeliveries({ onImport }) {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleImport = () => {
    // In a real application, you would process the file here
    console.log("File selected:", file.name)
    // You would then parse the file and call onImport with the parsed data
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="file-upload">Choose File</Label>
        <Input id="file-upload" type="file" onChange={handleFileChange} accept=".csv,.xlsx" />
      </div>
      <div className="text-sm text-muted-foreground">
        Supported formats: CSV, XLSX
      </div>
      <Button onClick={handleImport} disabled={!file}>Import</Button>
      <div>
        <a href="#" className="text-blue-500 hover:underline">Download Template</a>
      </div>
    </div>
  )
}

