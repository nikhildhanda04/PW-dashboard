import React from 'react';
import { Button } from "@/components/ui/button";
import FreeCourseTable from '@/components/Courses/FreeCourseTable';
const FreeCourse = () => {
  return (
    <div className='bg-gray-100 h-screen' >
      <div className='grid grid-cols-1 md:grid-cols-2 px-[10vw] pt-[10vh] gap-4'>
        <div className='bg-white px-[4vw] rounded-md shadow-lg py-[5vh] flex flex-col align-center'>
          <label htmlFor="Youtube Link" className='p-3 font-[8px]'>Youtube Link *</label>
          <input
            id="Youtube Link"
            type="text"
            placeholder='Paste Youtube Link'
            className='px-4 py-2 border rounded-lg shadow-sm w-full'
          />
        </div>
        <div className='bg-white rounded-md shadow-lg px-[4vw] py-[5vh]'>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <div className="text-gray-500 mb-4">No thumbnail uploaded</div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="thumbnail-upload"
            />
            <label htmlFor="thumbnail-upload">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Upload Thumbnail
              </Button>
            </label>
          </div>
        </div>

      </div>
      <div className='flex justify-end px-[10vw] py-[3vh] '>
      <Button className=' bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md '>
        Create
      </Button>
      </div>
        <div className='px-[9vw]'>
        <FreeCourseTable />
        </div>
    </div>
  );
};

export default FreeCourse;