import React, { useState } from "react";
import { MoreVertical, Edit, Trash2 } from 'lucide-react';

const reviews = [
  {
    srNo: 1,
    name: "Test Data",
    emailId: "ABC@gmail.com",
    reviewDate: "29/09/24, 10:20:00 AM",
    reviewText: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
  },
  {
    srNo: 2,
    name: "Test Data",
    emailId: "ABC@gmail.com",
    reviewDate: "29/09/24, 10:20:00 AM",
    reviewText: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
  },
  {
    srNo: 3,
    name: "Test Data",
    emailId: "ABC@gmail.com",
    reviewDate: "29/09/24, 10:20:00 AM",
    reviewText: "Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida pellentesque. Pellentesque interdum turpis habitasse semper morbi.",
  },
];

const ReviewTable = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleEditClick = (index) => {
    console.log(`Edit review at index ${index}`);
    setDropdownIndex(null);
  };

  const handleDeleteClick = (index) => {
    console.log(`Delete review at index ${index}`);
    setDropdownIndex(null);
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Sr.No</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Name</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Email</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Review</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Review Date</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={review.srNo} className="hover:bg-gray-50">
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{review.srNo}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{review.name}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{review.emailId}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{review.reviewText}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b">{review.reviewDate}</td>
                <td className="py-3 px-6 text-sm text-gray-700 border-b relative">
                  <MoreVertical
                    className="h-5 w-5 text-gray-500 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  />
                  {dropdownIndex === index && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                      <button
                        onClick={() => handleEditClick(index)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(index)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;