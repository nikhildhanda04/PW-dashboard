import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Star, CreditCard, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NotificationDialog } from "./notification-dialog"

const notifications = [
  {
    id: 1,
    user: "Kevin",
    action: "comments on your lecture",
    content: "What is ux",
    course: "2021 ui/ux design with figma",
    time: "Just now",
    icon: MessageCircle
  },
  {
    id: 2,
    user: "John",
    action: "give a 5 star rating on your course",
    course: "2021 ui/ux design with figma",
    time: "5 mins ago",
    icon: Star
  },
  {
    id: 3,
    user: "Sraboni",
    action: "purchase your course",
    course: "2021 ui/ux design with figma",
    time: "6 mins ago",
    icon: CreditCard
  },
  {
    id: 4,
    user: "Arif",
    action: "purchase your course",
    course: "2021 ui/ux design with figma",
    time: "10 mins ago",
    icon: CreditCard
  },
  {
    id: 5,
    user: "Emma",
    action: "comments on your lecture",
    content: "Great explanation!",
    course: "2021 ui/ux design with figma",
    time: "15 mins ago",
    icon: MessageCircle
  },
  {
    id: 6,
    user: "Michael",
    action: "give a 4 star rating on your course",
    course: "2021 ui/ux design with figma",
    time: "20 mins ago",
    icon: Star
  },
  {
    id: 7,
    user: "Sophie",
    action: "purchase your course",
    course: "2021 ui/ux design with figma",
    time: "25 mins ago",
    icon: CreditCard
  },
  {
    id: 8,
    user: "David",
    action: "comments on your lecture",
    content: "Could you explain this part more?",
    course: "2021 ui/ux design with figma",
    time: "30 mins ago",
    icon: MessageCircle
  }
]

export default function NotificationsPanel() {
  return (
    <Card className="w-[570px] h-[424px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 flex-shrink-0">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div className="flex items-center gap-2">
          <NotificationDialog />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Today
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>This Week</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <Separator className="flex-shrink-0" />
      <CardContent className="pt-4 flex-grow overflow-auto">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white overflow-hidden flex-shrink-0">
                <notification.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-semibold">{notification.user}</span>
                  {" "}
                  {notification.action}
                  {" "}
                  <span className="text-muted-foreground">"{notification.course}"</span>
                </p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

