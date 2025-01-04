import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: "1",
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    instructors: ["Harry Potter", "John Wick"],
    thumbnail: "/placeholder.svg?height=80&width=120",
    classLink: "https://example.com/course-1"
  },
  {
    id: "2",
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    instructors: ["Nobody"],
    thumbnail: "/placeholder.svg?height=80&width=120",
    classLink: "https://example.com/course-2"
  },
  {
    id: "3",
    title: "Angular - The Complete Guide (2021 Edition)",
    instructors: ["Harsh Kumar"],
    thumbnail: "/placeholder.svg?height=80&width=120",
    classLink: "https://example.com/course-3"
  }
]

export default function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">COURSE</TableHead>
          <TableHead className="w-[200px]">CLASS LINK</TableHead>
          <TableHead className="w-[200px]">ACTION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell>
  <div className="flex gap-4 items-center">
    <img
      src={course.thumbnail}
      alt={course.title}
      width={80}
      height={60}
      className="rounded-lg"
    />
    <div>
      <div className="font-medium">{course.title}</div>
      <div className="text-sm text-muted-foreground">
        Course by: {course.instructors.join(" • ")}
      </div>
    </div>
  </div>
</TableCell>

            <TableCell>
              <Button variant="link" className="text-primary">
                Class Link
              </Button>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Cancel Class
                </Button>
                <Button size="sm">
                  Start Now
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

