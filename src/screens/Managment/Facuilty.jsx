import React from 'react'
import FacuiltyTable from '@/components/Facuilty/FacuiltyTable'
import AddFaculty from '@/components/Facuilty/AddFaculty'

const Facuilty = () => {
  return (
    <div className='px-14 py-12'>
        <AddFaculty />
      <FacuiltyTable />
    </div>
  )
}

export default Facuilty
