import React from 'react'
import { Star, StarHalf } from 'lucide-react'
import { LineChart, Line } from "recharts"
import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

const data = [
  { value: 4.5 },
  { value: 4.8 },
  { value: 4.6 },
  { value: 4.7 },
  { value: 4.5 },
  { value: 4.6 },
  { value: 4.7 },
  { value: 4.6 },
]

const ratingBreakdown = [
  { stars: 5, percentage: 56 },
  { stars: 4, percentage: 37 },
  { stars: 3, percentage: 8 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0.5 },
]

export default function CourseRatingCard() {
  return (
    <Card className="w-[600px] h-[478px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Overall Course Rating</CardTitle>
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="This week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This week</SelectItem>
            <SelectItem value="month">This month</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center bg-orange-50 rounded-lg p-6">
            <span className="text-5xl font-bold mb-2">4.6</span>
            <div className="flex gap-1 text-orange-500 mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="fill-current" size={20} />
              ))}
              <StarHalf className="fill-current" size={20} />
            </div>
            <span className="text-sm text-muted-foreground">Overall Rating</span>
          </div>
          <div className="relative h-[140px]">
            <LineChart width={180} height={140} data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#f97316" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </div>
        </div>
        <div className="space-y-4 mt-8">
          {ratingBreakdown.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center gap-4">
              <div className="flex gap-1 text-orange-500 w-24">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} className="fill-current" size={16} />
                ))}
              </div>
              <Progress value={percentage} className="flex-1 bg-orange-100 [&>div]:bg-orange-500" />
              <span className="text-sm text-muted-foreground w-12">
                {percentage}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

