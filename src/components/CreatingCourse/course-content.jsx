import React, { useState } from 'react';
import { Search, FolderIcon, VideoIcon, FileIcon, ClipboardListIcon, HelpCircleIcon, MoreVertical, Lock, Unlock, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CourseContentManager = () => {
  const [folder, setFolder] = useState({
    name: "Laws Of Motion",
    videos: 0,
    documents: 0,
    tests: 0,
    quizzes: 0,
    assignments: 0,
    isLocked: true,
    isEnabled: true,
  });

  const [uploads, setUploads] = useState({
    videos: [],
    documents: [],
    tests: [],
    quizzes: [],
    assignments: [],
  });

  const [currentFile, setCurrentFile] = useState(null);
  const [currentSection, setCurrentSection] = useState('');

  const handleFileUpload = (type, files) => {
    const newFiles = Array.from(files);
    setUploads((prev) => ({
      ...prev,
      [type]: [...prev[type], ...newFiles],
    }));
    setFolder((prev) => ({
      ...prev,
      [type]: prev[type] + newFiles.length,
    }));
  };

  const renderPreview = (file) => {
    const fileUrl = URL.createObjectURL(file);
    if (file.type.includes('pdf')) {
      return (
        <object
          data={fileUrl}
          type="application/pdf"
          width="100%"
          height="100%"
          style={{ maxHeight: "500px", objectFit: "contain" }}
        >
          <p>Your browser does not support PDFs. <a href={fileUrl}>Download the PDF</a>.</p>
        </object>
      );
    } else if (file.type.includes('video')) {
      return <video src={fileUrl} controls className="w-full h-full" />;
    } else if (file.type.includes('audio')) {
      return <audio src={fileUrl} controls className="w-full h-full" />;
    } else {
      return <img src={fileUrl} alt="Preview" className="w-full h-full object-contain" />;
    }
  };

  // Handle file click to open preview
  const handleFileClick = (file, section) => {
    setCurrentFile(file);
    setCurrentSection(section);
  };

  // Delete file function
  const deleteFile = (type, index) => {
    const updatedFiles = uploads[type].filter((_, i) => i !== index);
    setUploads((prev) => ({
      ...prev,
      [type]: updatedFiles,
    }));

    setFolder((prev) => ({
      ...prev,
      [type]: prev[type] - 1, 
    }));

    if (currentFile === uploads[type][index]) {
      setCurrentFile(null);
      setCurrentSection('');
    }
  };

  const FileUploadDialog = ({ title, type, accept, icon }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start gap-2">
          {icon}
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload {title}</DialogTitle>
          <DialogDescription>
            Choose a file to upload as {title.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>
        <Input
          type="file"
          accept={accept}
          onChange={(e) => {
            handleFileUpload(type, e.target.files);
          }}
        />
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">Save</Button>
        <Button variant="outline" className="gap-2">
          <ClipboardListIcon className="h-4 w-4" />
          Bulk Action
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Course Content</h2>

      <div className="grid grid-cols-[1fr,300px] gap-6">
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <FolderIcon className="h-4 w-4" />
                </Button>
                <div>
                  <h3 className="font-medium">{folder.name}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{folder.videos} Videos</span>
                    <span>{folder.documents} Documents</span>
                    <span>{folder.tests} Tests</span>
                    <span>{folder.quizzes} Quizzes</span>
                    <span>{folder.assignments} Assignments</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => setFolder((prev) => ({ ...prev, isLocked: !prev.isLocked }))}>
                  {folder.isLocked ? <Lock className="h-4 w-4 text-red-700" /> : <Unlock className="h-4 w-4 text-blue-600" />}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Move</DropdownMenuItem>
                    <DropdownMenuItem>Copy</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="mt-4">
              <h4>Previews:</h4>
              <div className="flex gap-2 flex-wrap">
    
                {Object.keys(uploads).map((section) => {
                  return uploads[section].map((file, index) => (
                    <div key={index} className="w-80 h-auto border rounded-lg p-2 overflow-hidden relative">
                      <button
                        className="absolute top-2 right-2 bg-red-200 rounded-full text-red-500"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFile(section, index);
                        }}
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <div className="cursor-pointer" onClick={() => handleFileClick(file, section)}>
                        <span>{file.name}</span>
                        <div className="text-sm mt-1 font-semibold text-blue-600">{section}</div> 
                      </div>
                    </div>
                  ));
                })}
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">ADD CONTENT</h3>
          <div className="space-y-2">
            <FileUploadDialog title="Video" type="videos" accept="video/*" icon={<VideoIcon className="h-4 w-4" />} />
            <FileUploadDialog title="Notes" type="documents" accept=".pdf, .doc, .docx" icon={<FileIcon className="h-4 w-4" />} />
            <FileUploadDialog title="Test" type="tests" accept=".pdf, .doc, .docx" icon={<ClipboardListIcon className="h-4 w-4" />} />
            <FileUploadDialog title="Dpp" type="quizzes" accept=".pdf, .doc, .docx" icon={<HelpCircleIcon className="h-4 w-4" />} />
            <FileUploadDialog title="Assignment" type="assignments" accept=".pdf, .doc, .docx" icon={<FileIcon className="h-4 w-4" />} />
          </div>
        </div>
      </div>

      <Dialog open={currentFile !== null} onOpenChange={(open) => open || setCurrentFile(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Preview: {currentFile?.name}</DialogTitle>
            <DialogDescription>Section: {currentSection}</DialogDescription>
          </DialogHeader>
          <div className="my-4">
            {currentFile && renderPreview(currentFile)}
          </div>
          <Button variant="outline" onClick={() => setCurrentFile(null)}>Close Preview</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseContentManager;
