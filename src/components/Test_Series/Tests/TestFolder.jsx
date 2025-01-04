import React from 'react';
import { ChevronRight, FolderOpen, Pencil, Plus, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const TestFolder = ({ folder, folderIndex, addTest, deleteTest, updateTestName, editingTests, setEditingTests }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-xl font-semibold flex items-center gap-2">
        <FolderOpen className="h-5 w-5 text-muted-foreground" />
        {folder.name}
      </CardTitle>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => addTest(folderIndex)}>
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add new test</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add new test</TooltipContent>
      </Tooltip>
    </CardHeader>
    <CardContent className="pt-3">
      {folder.tests.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No tests created yet. Click the + button to add one.
        </div>
      ) : (
        <div className="space-y-3">
          {folder.tests.map((test, testIndex) => (
            <div key={testIndex} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border/50 transition-colors hover:bg-muted group">
              <div className="flex items-center gap-2 flex-1">
                {editingTests[testIndex] ? (
                  <Input
                    value={test.name}
                    onChange={(e) => updateTestName(folderIndex, testIndex, e.target.value)}
                    onBlur={() => setEditingTests((prevState) => {
                      const newState = { ...prevState };
                      delete newState[testIndex];
                      return newState;
                    })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setEditingTests((prevState) => {
                          const newState = { ...prevState };
                          delete newState[testIndex];
                          return newState;
                        });
                      }
                    }}
                    autoFocus
                    className="h-8 w-[200px]"
                  />
                ) : (
                  <span className="font-medium">{test.name}</span>
                )}
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="/createnewtest">
                  <Button variant="secondary" size="sm" className="gap-2">
                    Add Details
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setEditingTests((prevState) => ({ ...prevState, [testIndex]: true }))}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit test name</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Edit test name</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => deleteTest(folderIndex, testIndex)} className="hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete test</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete test</TooltipContent>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export default TestFolder;