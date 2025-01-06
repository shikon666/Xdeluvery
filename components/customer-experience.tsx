"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const satisfactionMetrics = {
  overallRating: 4.7,
  totalReviews: 1250,
  recentFeedback: [
    { id: 1, rating: 5, comment: "Excellent service, very prompt delivery!" },
    { id: 2, rating: 4, comment: "Good experience overall, package was in perfect condition." },
    { id: 3, rating: 3, comment: "Delivery was a bit late, but driver was polite." },
  ],
  areasForImprovement: [
    { area: "Delivery Speed", score: 4.5 },
    { area: "Communication", score: 4.3 },
    { area: "Package Handling", score: 4.8 },
  ]
}

const serviceQuality = {
  handlingCareScore: 4.8,
  communicationRating: 4.6,
  specialInstructionsCompliance: 95
}

export function CustomerExperience() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Satisfaction Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">{satisfactionMetrics.overallRating}/5</span>
              <span className="text-sm text-gray-500">Based on {satisfactionMetrics.totalReviews} reviews</span>
            </div>
            <Progress value={(satisfactionMetrics.overallRating / 5) * 100} className="h-2" />
            <div>
              <h4 className="font-semibold mb-2">Recent Feedback</h4>
              {satisfactionMetrics.recentFeedback.map(feedback => (
                <div key={feedback.id} className="mb-2">
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">{feedback.rating}/5</Badge>
                    <span className="text-sm">{feedback.comment}</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Areas for Improvement</h4>
              {satisfactionMetrics.areasForImprovement.map((area, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                  <span>{area.area}</span>
                  <span>{area.score}/5</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Service Quality</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Handling Care Score</span>
                <span>{serviceQuality.handlingCareScore}/5</span>
              </div>
              <Progress value={(serviceQuality.handlingCareScore / 5) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Communication Rating</span>
                <span>{serviceQuality.communicationRating}/5</span>
              </div>
              <Progress value={(serviceQuality.communicationRating / 5) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Special Instructions Compliance</span>
                <span>{serviceQuality.specialInstructionsCompliance}%</span>
              </div>
              <Progress value={serviceQuality.specialInstructionsCompliance} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

