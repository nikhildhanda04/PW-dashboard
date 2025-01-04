import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Upload, Bold, Italic, Underline, Link2, List, AlignLeft } from 'lucide-react';

const AdvanceInformation = ({
  formData,
  handleInputChange,
  handleImageUpload,
  handleVideoUpload,
  addNewField,
  courseFields = [],
  setCourseFields,
  audienceFields = [],
  setAudienceFields,
  requirementFields = [],
  setRequirementFields,
  handleFieldChange
}) => (
  <div className="space-y-8">
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="font-medium">Course Thumbnail</h3>
        <div className="border-2 border-dashed rounded-lg p-8 text-center">
          <div className="mx-auto w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <ImageIcon className="h-12 w-12 text-gray-400" />
          </div>
          <div className="text-sm text-gray-600 mb-4">
            <p>Upload your course Thumbnail here.</p>
            <p className="text-xs">Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png</p>
          </div>
          <Button variant="outline" onClick={handleImageUpload} className="text-blue-600">
            Upload Image <Upload className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Course Trailer</h3>
        <div className="border-2 border-dashed rounded-lg p-8 text-center">
          <div className="mx-auto w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <Upload className="h-12 w-12 text-gray-400" />
          </div>
          <div className="text-sm text-gray-600 mb-4">
            <p>Students who watch a well-made promo video are 5X more likely to enroll in your course.</p>
            <p>We've seen that statistic go up to 10X for exceptionally awesome videos.</p>
          </div>
          <Button variant="outline" onClick={handleVideoUpload} className="text-blue-600">
            Upload Video <Upload className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="font-medium">Course Descriptions</h3>
      <div className="space-y-4">
        <div className="flex gap-2 border-b pb-2">
          <Button variant="ghost" size="sm"><Bold className="h-4 w-4" /></Button>
          <Button variant="ghost" size="sm"><Italic className="h-4 w-4" /></Button>
          <Button variant="ghost" size="sm"><Underline className="h-4 w-4" /></Button>
          <Button variant="ghost" size="sm"><Link2 className="h-4 w-4" /></Button>
          <Button variant="ghost" size="sm"><List className="h-4 w-4" /></Button>
          <Button variant="ghost" size="sm"><AlignLeft className="h-4 w-4" /></Button>
        </div>
        <Textarea placeholder="Enter your course descriptions" className="min-h-[200px]" />
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">What you will teach in this course ({courseFields.length}/8)</h3>
        <Button variant="outline" size="sm" onClick={() => addNewField(courseFields, setCourseFields)} className="text-blue-600">Add new</Button>
      </div>
      <div className="space-y-4">   
        {courseFields.map((field, index) => (
          <div key={index} className="flex gap-4 items-start">
            <span className="text-sm text-gray-500 mt-2">{String(index + 1).padStart(2, '0')}</span>
            <div className="flex-1">
              <Input 
                placeholder="What you will teach in this course..." 
                value={field}
                onChange={(e) => handleFieldChange(index, e.target.value, courseFields, setCourseFields)}
              />
              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500">{field.length}/120</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Target Audience ({audienceFields.length}/8)</h3>
        <Button variant="outline" size="sm" onClick={() => addNewField(audienceFields, setAudienceFields)} className="text-blue-600">Add new</Button>
      </div>
      <div className="space-y-4">
        {audienceFields.map((field, index) => (
          <div key={index} className="flex gap-4 items-start">
            <span className="text-sm text-gray-500 mt-2">{String(index + 1).padStart(2, '0')}</span>
            <div className="flex-1">
              <Input 
                placeholder="Who this course is for..." 
                value={field}
                onChange={(e) => handleFieldChange(index, e.target.value, audienceFields, setAudienceFields)}
              />
              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500">{field.length}/120</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Course requirements ({requirementFields.length}/8)</h3>
        <Button variant="outline" size="sm" onClick={() => addNewField(requirementFields, setRequirementFields)} className="text-blue-600">Add new</Button>
      </div>
      <div className="space-y-4">
        {requirementFields.map((field, index) => (
          <div key={index} className="flex gap-4 items-start">
            <span className="text-sm text-gray-500 mt-2">{String(index + 1).padStart(2, '0')}</span>
            <div className="flex-1">
              <Input 
                placeholder="What are your course requirements..." 
                value={field}
                onChange={(e) => handleFieldChange(index, e.target.value, requirementFields, setRequirementFields)}
              />
              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500">{field.length}/120</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AdvanceInformation;