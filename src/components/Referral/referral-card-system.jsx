import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";
import { ChevronDown}  from 'lucide-react';

const initialReferrals = [
  {
    id: 1,
    code: "SUMMER2023",
    createdAt: "2023-06-01T10:00:00Z",
    ended: false,
  },
  {
    id: 2,
    code: "WELCOME50",
    createdAt: "2023-05-15T09:30:00Z",
    ended: false,
  },
  {
    id: 3,
    code: "SPRING2023",
    createdAt: "2023-03-01T08:00:00Z",
    ended: true,
    endedAt: "2023-05-31T23:59:59Z",
  },
  {
    id: 4,
    code: "NEWYEAR2023",
    createdAt: "2023-01-01T00:00:00Z",
    ended: true,
    endedAt: "2023-03-31T23:59:59Z",
  },
]



export default function ReferralSystem() {
  const [referrals, setReferrals] = useState(initialReferrals)
  const [newReferralCode, setNewReferralCode] = useState("")
  const [selectedCourse, setSelectedCourse] = useState(null);

  const dummyCourses = [
    { id: 'course1', name: 'Course 1' },
    { id: 'course2', name: 'Course 2' },
    { id: 'course3', name: 'Course 3' },
    { id: 'course4', name: 'Course 4' },
  ]

  const handleCreateReferral = (e) => {
    e.preventDefault()
    if (newReferralCode.trim()) {
      const newReferral = {
        id: Date.now(),
        code: newReferralCode.trim(),
        createdAt: new Date().toISOString(),
        ended: false,
      }
      setReferrals([...referrals, newReferral])
      setNewReferralCode("")
    }
  }

  const handleEndReferral = (id) => {
    setReferrals(referrals.map(referral => 
      referral.id === id 
        ? { ...referral, ended: true, endedAt: new Date().toISOString() } 
        : referral
    ))
  }

  const activeReferrals = referrals.filter(referral => !referral.ended)
  const endedReferrals = referrals.filter(referral => referral.ended)

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start justify-center p-4">
      <Card className="w-full md:w-[350px]">
        <CardHeader>
          <CardTitle>Make a Coupon Code</CardTitle>
          <CardDescription>Create a custom referral code.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleCreateReferral}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="referralCode">Referral Code</Label>
                <Input 
                  id="referralCode" 
                  placeholder="Enter your referral code" 
                  value={newReferralCode}
                  onChange={(e) => setNewReferralCode(e.target.value)}
                />
              </div>
              
            </div>
          </form>
          <input id="discountPerCent" type="number" placeholder="Enter discount percentage" className="bg-gray-100 w-full px-[7px] py-[8px]" />
          <input id="discountAmount" type="number" placeholder="Enter discount amount" className="bg-gray-100 w-full px-[7px] py-[8px]" />  
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="relative">
            <Input 
                      id="course" 
                      name="Course" 
                      value={selectedCourse ? selectedCourse.name : 'Course'} 
                      placeholder="Select Course" 
                      readOnly 
                    />
            <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-500" />
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                    {dummyCourses.map((course) => (
                      <DropdownMenuItem 
                        key={course.id} 
                        onClick={() => setSelectedCourse(course)}
                      >
                        {course.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" onClick={handleCreateReferral}>Create Referral</Button>
        </CardFooter>
      </Card>

      <Card className="w-full md:w-[600px]">
        <CardHeader>
          <CardTitle>Referral Codes</CardTitle>
          <CardDescription>Manage your active and ended referral codes.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Active Referral Codes</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeReferrals.map((referral) => (
                    <TableRow key={referral.id}>
                      <TableCell>{referral.code}</TableCell>
                      <TableCell>{new Date(referral.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Button variant="destructive" onClick={() => handleEndReferral(referral.id)}>
                          End Code
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Ended Referral Codes</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Ended At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {endedReferrals.map((referral) => (
                    <TableRow key={referral.id}>
                      <TableCell>{referral.code}</TableCell>
                      <TableCell>{new Date(referral.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(referral.endedAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

