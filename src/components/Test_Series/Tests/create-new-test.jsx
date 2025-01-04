import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Trash2 } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function TestForm() {
  const [status, setStatus] = useState("free");
  const [sections, setSections] = useState([
    { 
      id: 1, 
      sectionTitle: "Section 1", 
      negativeMarking: false, 
      marksPerQuestion: "0", 
      cutoffScore: "0", 
      isOptional: false, 
      fixedTiming: false, 
      timing: "", 
      pdf: null 
    },
  ]);

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleFileUpload = (index, file) => {
    const newSections = [...sections];
    newSections[index].pdf = file;
    setSections(newSections);
  };

  const handleDeleteSection = (index) => {
    if (sections.length > 1) {
     
      const updatedSections = sections.filter((_, idx) => idx !== index);
      setSections(updatedSections);
    } else {
      
      alert("At least one section must remain.");
    }
  };

  const handleRemoveFile = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].pdf = null; 
    setSections(updatedSections);
  };


  const addNewSection = () => {
    setSections([
      ...sections,
      {
        id: sections.length + 1,
        sectionTitle: "New Section",
        negativeMarking: false,
        marksPerQuestion: "",
        cutoffScore: "0",
        isOptional: false,
        fixedTiming: false,
        timing: "",
        pdf: null,
      },
    ]);
  };

  return (
    <div className="w-full bg-white mx-auto p-7 shadow-lg">

      <h2 className="text-xl mb-4 text-[#767C81]">Add Test</h2>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          {/* <TabsTrigger value="advanced">Advanced</TabsTrigger> */}
        </TabsList>
        <TabsContent value="basic">
          <div className="space-y-6">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input id="title" placeholder="Enter Title" />
              </div>

              <div>
                <Label>Status</Label>
                <RadioGroup
                  defaultValue="free"
                  onValueChange={setStatus}
                  className="flex items-center gap-4 mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="free">Free</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paid" id="paid" />
                    <Label htmlFor="paid">Paid</Label>
                  </div>
                </RadioGroup>
              </div>

              {status === "paid" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="selling-price">Selling Price</Label>
                    <Input id="selling-price" type="number" placeholder="Enter selling price" />
                  </div>
                  <div>
                    <Label htmlFor="mrp">MRP</Label>
                    <Input id="mrp" type="number" placeholder="Enter MRP" />
                  </div>
                  <div>
                    <Label htmlFor="validity">Validity (in days)</Label>
                    <Input id="validity" type="number" placeholder="Enter validity" />
                  </div>
                </div>
              )}

                <div className="space-y-4 py-6">
                              <h3 className="font-medium">Test Description</h3>
                              <div className="space-y-4">
                                <Textarea placeholder="Enter your course descriptions" className="min-h-[200px]" />
                              </div>
                            </div>

              <div>
                <Label htmlFor="test-series">Test Series *</Label>
                <Select>
                  <SelectTrigger id="test-series">
                    <SelectValue placeholder="e Test 2" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="etest2">e Test 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="questions">No. of Questions *</Label>
                  <Input id="questions" placeholder="Enter no of questions" />
                </div>
                <div>
                  <Label htmlFor="marks">Total Marks *</Label>
                  <Input id="marks" placeholder="Enter total marks" />
                </div>
                <div>
                  <Label htmlFor="duration">Total Duration (in minutes) *</Label>
                  <Input id="duration" placeholder="Enter duration in minutes" />
                </div>
              </div>

              <div>
                <Label htmlFor="sorting">Sorting Order *</Label>
                <Input id="sorting" placeholder="0.00" />
              </div>



              <div className="space-y-4 py-6">
  <div className="flex items-center gap-4 mb-6">
    <h3 className="text-lg font-medium">Sections</h3>
    <Button
      variant="outline"
      size="sm"
      onClick={addNewSection}
      className="h-8"
      disabled={sections.length >= 5} 
    >
      + Add New Section
    </Button>
  </div>


  <div className="space-y-4">
   
    <div className="grid grid-cols-12 gap-4 items-center pb-2 text-sm font-medium text-muted-foreground border-b">
      <div className="col-span-2">Section *</div>
      <div className="col-span-2">Negative Marking</div>
      <div className="col-span-1">Marks/Q</div>
      <div className="col-span-1">Optional</div>
      <div className="col-span-2">Fixed Timing</div>
      <div className="col-span-4">Upload PDF</div>
      <div className="col-span-1"></div> 
    </div>

    {sections.map((section, index) => (
      <div
        key={section.id}
        className="grid grid-cols-12 gap-4 items-center py-3 border-b last:border-b-0"
      >
        <div className="col-span-2 relative">
          <Input
            value={section.sectionTitle}
            onChange={(e) => handleSectionChange(index, "sectionTitle", e.target.value)}
            className="pr-8"
          />
        </div>

        <div className="col-span-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={section.negativeMarking}
              onCheckedChange={(checked) =>
                handleSectionChange(index, "negativeMarking", checked)
              }
            />
          </div>
          {section.negativeMarking && (
            <Input
              value={section.negativeMarks}
              onChange={(e) =>
                handleSectionChange(index, "negativeMarks", e.target.value)
              }
              placeholder="-ve marks"
              type="number"
              className="w-20"
            />
          )}
        </div>

        <div className="col-span-1">
          <Input
            value={section.marksPerQuestion}
            onChange={(e) =>
              handleSectionChange(index, "marksPerQuestion", e.target.value)
            }
            placeholder="Marks"
            type="number"
          />
        </div>

        <div className="col-span-1 flex items-center gap-2">
          <Checkbox
            checked={section.isOptional}
            onCheckedChange={(checked) =>
              handleSectionChange(index, "isOptional", checked)
            }
          />
          <Label className="text-sm">Yes</Label>
        </div>

        <div className="col-span-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={section.fixedTiming}
              onCheckedChange={(checked) =>
                handleSectionChange(index, "fixedTiming", checked)
              }
            />
          </div>
          {section.fixedTiming && (
            <Input
              value={section.timing}
              onChange={(e) => handleSectionChange(index, "timing", e.target.value)}
              placeholder="Minutes"
              type="number"
              className="w-24"
            />
          )}
        </div>

        <div className="col-span-4 flex items-center gap-2">
            
              <Input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileUpload(index, e.target.files[0])}
                className="text-sm file:bg-secondary file:text-secondary-foreground file:border-0 file:mr-2 file:px-4 file:py-2 hover:file:bg-secondary/80"
                disabled={section.pdf} 
              />
              
              {section.pdf && (
                <div className="relative flex items-center">
                  <span className="text-xs text-muted-foreground mr-2">
                    PDF Uploaded
                  </span>
                  <Button
                    variant="link"
                    color="red"
                    size="sm"
                    onClick={() => handleRemoveFile(index)}
                  >
                    Remove File
                  </Button>
                </div>
              )}
            </div>

            <div className="col-span-1 flex justify-center">
              <Button
                variant="link"
                color="red"
                size="sm"
                disabled={sections.length <= 1} 
                onClick={() => handleDeleteSection(index)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
        </div>
      </div>
    ))}
  </div>
</div>


              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Date</Label>
                  <Input type="datetime-local" defaultValue="2024-11-20T13:41:38" />
                  <p className="text-sm text-gray-500 mt-1">
                    Test will be active for attempts from the selected date
                  </p>
                </div>
                <div>
                  <Label>End Date *</Label>
                  <Input type="datetime-local" defaultValue="2024-11-20T13:41:38" />
                  <p className="text-sm text-gray-500 mt-1">
                    Attempts won't be allowed after the selected date
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Test Material</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Attach PDF</Label>
                    <Input type="file" className="mt-1" />
                  </div>
                  <div>
                    <Label>Allow PDF Download *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="No" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">Submit</Button>
          </div>
        </TabsContent>
        {/* <TabsContent value="advanced">
    <div className="space-y-6">
   
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Language and Translation</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Language</Label>
            <Select defaultValue="english">
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Translation Text</Label>
            <Input placeholder="Enter test title..." />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Test Attempt Settings</h3>
        <div className="space-y-4">
          <div>
            <Label>Maximum Attempts Allowed * (-1 is unlimited)</Label>
            <Input placeholder="-1" type="number" defaultValue={-1} />
            <p className="text-sm text-gray-500 mt-1">
              Specify the maximum number of times each student can attempt this test
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Display Pause Option</Label>
              <p className="text-sm text-gray-500">
                Switch ON to provide students the ability to pause the time during test
              </p>
            </div>
            <Switch />
          </div>
          <div>
            <Label>UI Type</Label>
            <Select defaultValue="default">
              <SelectTrigger>
                <SelectValue placeholder="Select UI type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Test Result Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Partial Scoring</Label>
              <p className="text-sm text-gray-500">
                Switch ON to award partial marks for partially correct answers
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Display Test Results</Label>
              <p className="text-sm text-gray-500">
                Switch ON to display the test result to the participant
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Total Students</Label>
              <p className="text-sm text-gray-500">
                Switch ON to display the total students along with rank in test result analysis
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Telegram Settings</h3>
        
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Additional Settings</h3>
        <div>
          <Label>Enable/Disable</Label>
          <Select defaultValue="disable">
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enable">Enable</SelectItem>
              <SelectItem value="disable">Disable</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="bg-blue-600 hover:bg-blue-700">Submit</Button>
    </div>
  </TabsContent> */}
      </Tabs>
    </div>
  );
}
