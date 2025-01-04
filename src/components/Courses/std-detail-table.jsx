import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const students = [
  {
    id: "STU001",
    name: "Rishav Bhardwaz",
    email: "rishav76000@gmail.com",
    phone: "+91 1234567890",
  },
  {
    id: "STU002", 
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "+91 2345678901",
  },
  {
    id: "STU003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+91 3456789012",
  },
  {
    id: "STU004",
    name: "Carol Williams",
    email: "carol.w@example.com",
    phone: "+91 4567890123",
  },
  {
    id: "STU005",
    name: "David Brown",
    email: "david.b@example.com",
    phone: "+91 5678901234",
  }
];

export default function StudentTable() {
  const navigate = useNavigate();

  const handleRowClick = (student) => {
    navigate('/studentdetailspage');
  };

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[50px] p-4">
              <Checkbox />
            </TableHead>
            <TableHead className="w-[100px] p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student ID
            </TableHead>
            <TableHead className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student Name
            </TableHead>
            <TableHead className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </TableHead>
            <TableHead className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <TableRow
              key={student.id}
              onClick={() => handleRowClick(student)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <TableCell className="p-4">
                <Checkbox />
              </TableCell>
              <TableCell className="p-4 font-medium text-gray-900">{student.id}</TableCell>
              <TableCell className="p-4 text-gray-900">{student.name}</TableCell>
              <TableCell className="p-4 text-gray-900">{student.email}</TableCell>
              <TableCell className="p-4 text-gray-900">{student.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}