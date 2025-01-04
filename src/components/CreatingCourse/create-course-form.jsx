import React, { useState } from "react";
import { Info, BookOpen, FileText, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import BasicInformation from "@/components/CreatingCourse/BasicInformation";
import AdvanceInformation from "@/components/CreatingCourse/AdvanceInformation";
import Curriculum from "@/components/CreatingCourse/Curriculum";

const CourseCreationForm = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    category: "",
    subcategory: "",
    topic: "",
    language: "",
    subtitleLanguage: "",
    level: "",
    duration: "",
    durationUnit: "",
    instructor1: "",
    instructor2: "",
    instructor3: "",
    instructor4: "",
  });

  const filledFields = Object.values(formData).filter(Boolean).length;
  const totalFields = Object.keys(formData).length;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getTabHeader = (tab) => {
    switch (tab) {
      case "basic":
        return "Basic Information";
      case "advance":
        return "Advance Information";
      case "curriculum":
        return "Curriculum";
      case "publish":
        return "Publish Course";
      default:
        return "";
    }
  };

  return (
    <Card className="w-full max-w-[1320px] shadow-md">
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-6">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger
                value="basic"
                className="flex items-center justify-center space-x-2 border-b-2 border-transparent data-[state=active]:border-orange-500 pb-2"
              >
                <Info className="h-5 w-5" />
                <span>Basic Information</span>
                {activeTab === "basic" && (
                  <span className="ml-2 text-sm font-semibold text-green-600">
                    ({filledFields}/{totalFields})
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="advance"
                className="flex items-center justify-center space-x-2 border-b-2 border-transparent data-[state=active]:border-orange-500 pb-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Advance Information</span>
              </TabsTrigger>
              <TabsTrigger
                value="curriculum"
                className="flex items-center justify-center space-x-2 border-b-2 border-transparent data-[state=active]:border-orange-500 pb-2"
              >
                <FileText className="h-5 w-5 text-purple-600" />
                <span>Curriculum</span>
              </TabsTrigger>
              <TabsTrigger
                value="publish"
                className="flex items-center justify-center space-x-2 border-b-2 border-transparent data-[state=active]:border-orange-500 pb-2"
              >
                <Upload className="h-5 w-5 text-blue-600" />
                <span>Publish Course</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator className="mb-6" />
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{getTabHeader(activeTab)}</h2>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Save
              </Button>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                Save & Preview
              </Button>
            </div>
          </div>
          <TabsContent value="basic">
            <BasicInformation formData={formData} handleInputChange={handleInputChange} />
          </TabsContent>
          <TabsContent value="advance">
            <AdvanceInformation formData={formData} handleInputChange={handleInputChange} />
          </TabsContent>
          <TabsContent value="curriculum">
            <Curriculum />
          </TabsContent>
          <TabsContent value="publish">
            <div className="py-4 text-center">
              <p className="text-sm text-muted-foreground">Publish your course here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <div className="flex justify-between p-6 border-t">
        <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">Cancel</Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Save & Next</Button>
      </div>
    </Card>
  );
};

export default CourseCreationForm;