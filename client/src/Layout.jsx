import React from 'react'
import SideNavbar from './components/SideNavbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className='min-h-screen w-full bg-white text-black flex'>
      <SideNavbar/>
      <div className='p-8 w-full'>
        <Outlet/>
      </div>
   </div>
    </>
  )
}

export default Layout