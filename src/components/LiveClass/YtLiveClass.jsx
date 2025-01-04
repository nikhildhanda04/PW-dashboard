import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const YtLiveClass = () => {

      const [title, setTitle] = useState('');
      const [selectedCourse, setSelectedCourse] = useState('');
      const [link, setLink] = useState('');
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
    
      const courses = [
        { id: 'course1', name: 'Course 1' },
        { id: 'course2', name: 'Course 2' },
        { id: 'course3', name: 'Course 3' },
        { id: 'course4', name: 'Course 4' },
      ];


  return (
    <div>
    <Card className="w-full">
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Live Class Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter live class title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="courses">Select Course</Label>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger id="courses">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="link">Live Class Link</Label>
            <Input
              id="link"
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter live class link"
            />
          </div>
          <div className="space-y-4">
            <Label>Schedule</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default YtLiveClass
