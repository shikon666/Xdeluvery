import { Metadata } from "next"
import DashboardHome from "@/components/dashboard-home"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Xdelivery Dashboard",
}

export default function DashboardPage() {
  return <DashboardHome />
}

