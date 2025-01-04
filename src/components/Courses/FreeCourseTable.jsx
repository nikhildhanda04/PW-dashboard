import React  from 'react';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';
import { DropdownMenu as DM, DropdownMenuTrigger as DMT, DropdownMenuContent as DMC, DropdownMenuItem as DMI } from "@/components/ui/dropdown-menu";

const FreeCourseTable = () => {
  const dummyData = [
    { sno: 1, youtubeLink: 'https://www.youtube.com/', date: '2023-10-01' },
    { sno: 2, youtubeLink: 'https://www.youtube.com/', date: '2023-10-02' },
    { sno: 3, youtubeLink: 'https://www.youtube.com/', date: '2023-10-03' },
  ];

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-blue-100">
            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Sno</th>
            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Youtube Link</th>
            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Date</th>
            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((entry, index) => (
            <tr key={entry.sno} className="hover:bg-gray-50">
              <td className="py-3 px-6 text-sm text-gray-700 border-b">{entry.sno}</td>
              <td className="py-3 px-6 text-sm text-gray-700 border-b">
                <a href={entry.youtubeLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Click here
                </a>
              </td>
              <td className="py-3 px-6 text-sm text-gray-700 border-b">{entry.date}</td>
              <td className="py-3 px-6 text-sm text-gray-700 border-b relative">
                <DM>
                  <DMT>
                    <MoreVertical className="h-5 w-5 text-gray-500 cursor-pointer" />
                  </DMT>
                  <DMC>
                    <DMI>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DMI>
                    <DMI>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DMI>
                  </DMC>
                </DM>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeCourseTable;