import React, { useState } from "react";
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import TestFolder from './TestFolder';

export default function AllTests() {
  const [testFolders, setTestFolders] = useState([
    { name: "CTET", tests: [] },
  ]);
  const [editingTests, setEditingTests] = useState({});

  const addTest = (folderIndex) => {
    setTestFolders((prevTestFolders) =>
      prevTestFolders.map((folder, index) =>
        index === folderIndex
          ? { ...folder, tests: [...folder.tests, { name: "New Test", contents: [] }] }
          : folder
      )
    );
  };

  const deleteTest = (folderIndex, testIndex) => {
    setTestFolders((prevTestFolders) =>
      prevTestFolders.map((folder, index) =>
        index === folderIndex
          ? { ...folder, tests: folder.tests.filter((_, i) => i !== testIndex) }
          : folder
      )
    );
  };

  const updateTestName = (folderIndex, testIndex, newName) => {
    setTestFolders((prevTestFolders) =>
      prevTestFolders.map((folder, index) =>
        index === folderIndex
          ? { ...folder, tests: folder.tests.map((test, i) => (i === testIndex ? { ...test, name: newName } : test)) }
          : folder
      )
    );
  };

  return (
    <TooltipProvider>
      <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
        {testFolders.map((folder, folderIndex) => (
          <TestFolder
            key={folderIndex}
            folder={folder}
            folderIndex={folderIndex}
            addTest={addTest}
            deleteTest={deleteTest}
            updateTestName={updateTestName}
            editingTests={editingTests}
            setEditingTests={setEditingTests}
          />
        ))}

        {testFolders.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No Test Folders</h3>
            <p className="text-muted-foreground mb-4">
              Get started by creating your first test folder
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Test Folder
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}