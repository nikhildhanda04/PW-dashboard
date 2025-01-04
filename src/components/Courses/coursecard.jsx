import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical, Star, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function CourseCard({
  category = "DEVELOPMENTS",
  title = "Premiere Pro CC for Beginners: Video Editing in Premiere",
  rating = 4.9,
  students = "982,941",
  price = "24.00",
  courseID = "PHY001",
  imageUrl = "https://via.placeholder.com/300", 
}) {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-md shadow-lg">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      <CardContent className="p-4 space-y-4">

        <div className="text-xs font-semibold uppercase tracking-wide p-2 bg-[#EBEBFF] text-[#342F98] inline-block">
          {category}
        </div>

        <div className="text-xs font-semibold uppercase tracking-wide p-2 bg-[#EBEBFF] ml-1 text-[#342F98] inline-block">
          {courseID}
        </div>

    
        <h2 className="text-lg font-bold leading-tight text-gray-900">
          {title}
        </h2>

      
        <hr className="border-gray-300" />

        <div className="flex items-center gap-4">
        
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>

          <div className="flex items-center ml-auto gap-1 text-gray-500">
            <User className="h-4 w-4" />
            <span className="text-sm">{students} students</span>
          </div>
        </div>
        <hr className="border-gray-300" />

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-[#3A6BE4]">{price} Rs</div>
          <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={5} className="w-32">
          <DropdownMenuItem onClick={() => alert("Course Details clicked")}>
            View Details
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <a href="/Createcourse">
          <DropdownMenuItem>
            Edit Course
          </DropdownMenuItem>
          </a>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/studentdetails")}>
      Students Detail
    </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
      </CardContent>
    </Card>
  );
}
