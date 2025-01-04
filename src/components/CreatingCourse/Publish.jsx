import React from 'react';

const Publish = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Message</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label>Welcome Message</label>
            <textarea 
              placeholder="Enter course starting message here..." 
              className="min-h-[120px] resize-none"
            />
          </div>
          <div className="space-y-2">
            <label>Congratulations Message</label>
            <textarea 
              placeholder="Enter your course completed message here..." 
              className="min-h-[120px] resize-none"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Add Instructor</h3>
        </div>
        <div className="relative">
          <svg
            className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M15 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by username"
            className="pl-8 border border-gray-300 rounded-md w-full py-2"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {/* Example instructor data, replace with dynamic data as needed */}
          {['Instructor 1', 'Instructor 2'].map((instructor, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 pr-3"
            >
              <img
                src="/placeholder.svg"
                alt={`${instructor}'s avatar`}
                className="rounded-full w-8 h-8"
              />
              <div className="text-sm">
                <p className="font-medium">{instructor}</p>
                <p className="text-muted-foreground text-xs">Role</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publish;