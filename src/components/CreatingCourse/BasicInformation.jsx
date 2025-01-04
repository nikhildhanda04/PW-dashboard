import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BasicInformation = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <div>
      <Label htmlFor="title" className="text-sm font-medium">Title</Label>
      <Input 
        id="title" 
        placeholder="Your course title" 
        className="mt-1" 
        value={formData.title}
        onChange={(e) => handleInputChange("title", e.target.value)}
      />
      <div className="flex justify-end mt-1">
        <span className="text-xs text-gray-500">{formData.title.length}/80</span>
      </div>
    </div>
    <div>
      <Label htmlFor="subtitle" className="text-sm font-medium">Subtitle</Label>
      <Input 
        id="subtitle" 
        placeholder="Your course subtitle" 
        className="mt-1"
        value={formData.subtitle}
        onChange={(e) => handleInputChange("subtitle", e.target.value)}
      />
      <div className="flex justify-end mt-1">
        <span className="text-xs text-gray-500">{formData.subtitle.length}/80</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="category" className="text-sm font-medium">Course Category</Label>
        <Select onValueChange={(value) => handleInputChange("category", value)}>
          <SelectTrigger id="category" className="mt-1">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category1">Category 1</SelectItem>
            <SelectItem value="category2">Category 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="subcategory" className="text-sm font-medium">Course Sub-category</Label>
        <Select onValueChange={(value) => handleInputChange("subcategory", value)}>
          <SelectTrigger id="subcategory" className="mt-1">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="subcategory1">Subcategory 1</SelectItem>
            <SelectItem value="subcategory2">Subcategory 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div>
      <Label htmlFor="topic" className="text-sm font-medium">Course Topic</Label>
      <Input 
        id="topic" 
        placeholder="What is primarily taught in your course?" 
        className="mt-1"
        value={formData.topic}
        onChange={(e) => handleInputChange("topic", e.target.value)}
      />
    </div>
    <div className="grid grid-cols-4 gap-4">
      <div>
        <Label htmlFor="language" className="text-sm font-medium">Course Language</Label>
        <Select onValueChange={(value) => handleInputChange("language", value)}>
          <SelectTrigger id="language" className="mt-1">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="subtitle-language" className="text-sm font-medium">Subtitle Language (Optional)</Label>
        <Select onValueChange={(value) => handleInputChange("subtitleLanguage", value)}>
          <SelectTrigger id="subtitle-language" className="mt-1">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="course-level" className="text-sm font-medium">Course Level</Label>
        <Select onValueChange={(value) => handleInputChange("level", value)}>
          <SelectTrigger id="course-level" className="mt-1">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="duration" className="text-sm font-medium">Durations</Label>
        <div className="flex mt-1">
          <Input 
            placeholder="Duration" 
            className="rounded-r-none"
            value={formData.duration}
            onChange={(e) => handleInputChange("duration", e.target.value)}
          />
          <Select onValueChange={(value) => handleInputChange("durationUnit", value)}>
            <SelectTrigger className="w-[110px] rounded-l-none">
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((num) => (
        <div key={num}>
          <Label htmlFor={`instructor${num}`} className="text-sm font-medium">
            {num === 1 ? 'Allot Instructor' : `Allot Instructor (Optional)`}
          </Label>
          <Select onValueChange={(value) => handleInputChange(`instructor${num}`, value)}>
            <SelectTrigger id={`instructor${num}`} className="mt-1">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="harsh-kumar">Harsh Kumar - 10012</SelectItem>
              <SelectItem value="ankit-kumar">Ankit Kumar - 10013</SelectItem>
              <SelectItem value="abhishek-kumar">Abhishek Kumar - 10014</SelectItem>
              <SelectItem value="rishav-bhardwaz">Rishav Bhardwaz - 10015</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  </div>
);

export default BasicInformation;