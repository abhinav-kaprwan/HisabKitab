import React from 'react'
import SideBar from './SideBar'
function Dashboard() {
  return (
    <>
    <div className='flex'>
      <SideBar/>
      <div className='flex mx-10 m p-5 rounded bg-gray-500'>
          <div className='text-xl '>
            Total amount
          </div>
          <h1>value</h1>
      </div>
      <div className='flex p-5'>
          <div>
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