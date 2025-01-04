import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function StatCard({ title, value, icon: Icon, className, iconClassName }) {
  return (
    <Card className={cn("w-full max-w-[260px] h-[108px]", className)}>
      <CardContent className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className={cn("p-5", iconClassName)}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="space-y-1 overflow-hidden">
            <p className="text-sm text-muted-foreground truncate">{title}</p>
            <p className="text-2xl font-bold truncate">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
