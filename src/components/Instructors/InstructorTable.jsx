import React  from 'react';

const instructorData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', courses: ['Biology 101', 'Chemistry 102'], subject: 'Biology' },
  { id: 2, name: 'Bob Brown', email: 'bob@example.com', phone: '987-654-3210', courses: ['History 101', 'Geography 102'], subject: 'History' },
];

const InstructorTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto mt-4">
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
            {instructorData.map((instructor, index) => (
              <tr key={instructor.id} className="hover:bg-gray-50">
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{index + 1}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{instructor.name}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{instructor.email}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{instructor.phone}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{instructor.courses.join(', ')}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{instructor.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorTable;