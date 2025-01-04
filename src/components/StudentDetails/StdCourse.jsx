import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const StdCourse = ({
    category = "DEVELOPMENTS",
    title = "Premiere Pro CC for Beginners: Video Editing in Premiere",
    courseID = "PHY001",
    imageUrl = "https://via.placeholder.com/300", 
  }) => {
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

          </CardContent>
        </Card>
      );
}

export default StdCourse
