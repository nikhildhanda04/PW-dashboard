import React from 'react';
import { Separator } from '../ui/separator';
import StdCourse from './StdCourse';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StudentDetailDsbrd = () => {

  const Student = ({
    id : "SD123",
    name : "John Doe",

  })
  return (
    <div className='bg-white px-[3vw] rounded-lg shadow-md'>
      <div className="grid grid-cols-12 py-[4vh] gap-4 items-center jusitify-center">
        <div className='flex justify-end col-span-4'>
          <img
            src="/src/assets/Illustrations.svg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className='flex flex-col items-start justify-start col-span-8'>
          <p className="text-[2vw] font-medium">
            {Student.name}
          </p>
          <p className="text-sm text-gray-500">
            {Student.id}
          </p>
        </div>
      </div>

      <Separator />

      <div className='px-[6vw] py-[5vh] text-[3vh] font-medium font-[inter]'>

        <div className='flex flex-row items-center justify-between'>
          <div className='' >
          <p className='py-[1vh]'>
           Purchased Courses
          </p>
          </div>
          <div className='flex flex-row items-center'>ā
            <button>
            <ChevronLeft/>
            </button>
            <button>
            <ChevronRight/>
            </button>
          </div>
        </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <StdCourse />
            <StdCourse />
            <StdCourse />
          </div>
      </div>
      <Separator />

      <div className='px-[6vw] py-[5vh]'>

      </div>
    </div>
  );
};

export default StudentDetailDsbrd;