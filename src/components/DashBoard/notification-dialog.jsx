import React from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function NotificationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" className="rounded-full w-8 h-8 p-0">
          <Plus className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notification Details</DialogTitle>
        </DialogHeader>

        <Separator className="flex-shrink-0" />

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="notification">Notification</Label>
            <Input
              id="notification"
              placeholder="Write your section name here.."
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Select Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paid">Paid User</SelectItem>
                <SelectItem value="non-paid">Non-Paid User</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button className="bg-blue-700" type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

