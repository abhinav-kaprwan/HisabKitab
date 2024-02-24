import React from 'react'
import SideBar from './SideBar'
function Dashboard() {
  return (
    <>
    <div className='flex justify-between'>
      <SideBar/>
        <div className='flex mx-5 p-5 rounded bg-gray-500'>
            <div className='text-xl '>
              Total amount
            </div>
            
            <h1>value</h1>
        </div>
        <div className='flex p-5 mx-5 rounded bg-gray-500'>
            <div className='text-xl'>
              Total Lending
            </div>
            <div>
              value
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard