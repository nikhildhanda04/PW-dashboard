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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const referralData = [
  { srNo: 1, studentName: "John Doe", studentID: "S001", referrals: 3 },
  { srNo: 2, studentName: "Jane Smith", studentID: "S002", referrals: 5 },
  { srNo: 3, studentName: "Alice Johnson", studentID: "S003", referrals: 2 },
];

const ReferralTable = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [referredStudents, setReferredStudents] = useState([]);

  const handleViewReferrals = (studentName) => {
   
    const referralList = [
      { name: "Referred Student 1", id: "R001" },
      { name: "Referred Student 2", id: "R002" },
    ];
    setReferredStudents(referralList);
    setOpenDialog(true);
  };

  return (
    <React.Fragment>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-200">
              <TableHead className="font-bold text-[black]">SNo</TableHead>
              <TableHead className="font-bold text-[black]">Student Name</TableHead>
              <TableHead className="font-bold text-[black]">Student ID</TableHead>
              <TableHead className="font-bold text-[black]">Number of Referrals</TableHead>
              <TableHead className="font-bold text-[black]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referralData.map((data) => (
              <TableRow key={data.srNo}>
                <TableCell>{data.srNo}</TableCell>
                <TableCell>{data.studentName}</TableCell>
                <TableCell>{data.studentID}</TableCell>
                <TableCell>{data.referrals}</TableCell>
                <TableCell>
                  <Button
                    className="bg-blue-500 text-white rounded-none"
                    onClick={() => handleViewReferrals(data.studentName)}
                  >
                    View Referrals
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Referred Students</DialogTitle>
          </DialogHeader>
          <div>
            <ul>
              {referredStudents.map((student, index) => (
                <li key={index}>
                  {student.name} (ID: {student.id})
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ReferralTable;
