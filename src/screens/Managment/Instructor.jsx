import React from 'react'
import AddInstructor from '@/components/Instructors/AddInstructor'
import InstructorTable from '@/components/Instructors/InstructorTable'

const Instructor = () => {
  return (
    <div className='px-14 py-12'>
      <AddInstructor />
      <InstructorTable />
    </div>
  )
}

export default Instructor
