import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const queries = [
  {
    srNo: 1,
    name: "Test Data",
    contact: "91 xxxxx xxxxx",
    emailId: "ABC@gmail.com",
    queryDate: "29/09/24, 10:20:00 AM",
    query: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
    comments: [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
        timestamp: "Today, 10:55:00"
      }
    ]
  },
  {
    srNo: 2,
    name: "Test Data",
    contact: "91 xxxxx xxxxx",
    emailId: "ABC@gmail.com",
    queryDate: "29/09/24, 10:20:00 AM",
    query: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
    comments: [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
        timestamp: "Today, 10:55:00"
      }
    ]
  },
  {
    srNo: 3,
    name: "Test Data",
    contact: "91 xxxxx xxxxx",
    emailId: "ABC@gmail.com",
    queryDate: "29/09/24, 10:20:00 AM",
    query: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
    comments: [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
        timestamp: "Today, 10:55:00"
      }
    ]
  },
];

const TableDemo = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [isRecentQueryOpen, setIsRecentQueryOpen] = useState(false);
  const [isAllQueriesOpen, setIsAllQueriesOpen] = useState(false);
  const [newComment, setNewComment] = useState("");

  return (
    <React.Fragment>
  <div className="rounded-md border overflow-x-auto">
    <Table className="w-full min-w-[700px]">
      <TableHeader>
        <TableRow className="bg-gray-200">
          <TableHead className="w-[50px]">
            <Checkbox />
          </TableHead>
          <TableHead className="font-bold text-black">Sr.No</TableHead>
          <TableHead className="font-bold text-black">Name</TableHead>
          <TableHead className="font-bold text-black">Contact</TableHead>
          <TableHead className="font-bold text-black">Email ID</TableHead>
          <TableHead className="font-bold text-black">Query Date</TableHead>
          <TableHead className="font-bold text-black">Recent Query</TableHead>
          <TableHead className="font-bold text-black">View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {queries.map((query) => (
          <TableRow key={query.srNo} className="hover:bg-gray-50">
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{query.srNo}</TableCell>
            <TableCell>{query.name}</TableCell>
            <TableCell>{query.contact}</TableCell>
            <TableCell>{query.emailId}</TableCell>
            <TableCell>{query.queryDate}</TableCell>
            <TableCell>
              <Button
                variant="default"
                className="bg-[#253483] rounded-none text-white"
                onClick={() => {
                  setSelectedQuery(query);
                  setIsRecentQueryOpen(true);
                }}
              >
                View
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="default"
                className="bg-[#253483] rounded-none text-white"
                onClick={() => {
                  setSelectedQuery(query);
                  setIsAllQueriesOpen(true);
                }}
              >
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>

  {/* Recent Query Dialog */}
  <Dialog open={isRecentQueryOpen} onOpenChange={setIsRecentQueryOpen}>
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle>Recent Query</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsRecentQueryOpen(false)}
          >
           
          </Button>
        </div>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Query</div>
          <div className="text-sm text-gray-500">{selectedQuery?.query}</div>
          <div className="text-xs text-gray-400 text-right">
            Today, 10:55:00
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Comment</div>
          <Textarea
            placeholder="Add Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </div>
      <DialogFooter className="gap-2 sm:gap-0">
        <Button
          variant="outline"
          onClick={() => setIsRecentQueryOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="bg-blue-700 hover:bg-blue-800 text-white"
          onClick={() => {
            // Handle comment submission
            setNewComment("");
            setIsRecentQueryOpen(false);
          }}
        >
          Add Comment
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  {/* All Queries Dialog */}
  <Dialog open={isAllQueriesOpen} onOpenChange={setIsAllQueriesOpen}>
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle>All Queries</DialogTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            
          </div>
        </div>
      </DialogHeader>
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="space-y-1">
              <div className="text-sm font-medium">Query:</div>
              <div className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Comment:</div>
              <div className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.
              </div>
            </div>
            <div className="text-xs text-gray-400 text-right">
              Today, 10:55:00
            </div>
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
</React.Fragment>

  );
};

export default TableDemo;

