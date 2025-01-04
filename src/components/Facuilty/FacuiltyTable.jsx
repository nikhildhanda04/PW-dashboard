import React from 'react';

const facultyData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', courses: ['Math 101,', ' Physics 102'], subject: 'Mathematics' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', courses: ['Physics 101,', ' Chemistry 102'], subject: 'Physics' },
  
];

const FacuiltyTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">S.No</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Name</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Email</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Phone Number</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Courses Assigned</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Subject</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((faculty, index) => (
              <tr key={faculty.id} className="hover:bg-gray-50">
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{index + 1}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{faculty.name}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{faculty.email}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{faculty.phone}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{faculty.courses}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{faculty.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacuiltyTable;