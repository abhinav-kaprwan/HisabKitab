import React, { useState } from 'react'
import { Nav } from './ui/Nav'

import { LayoutDashboard,Contact2 ,BadgeDollarSign,Settings,LogOut,ChevronRight,ChevronLeft} from 'lucide-react'
import { Button } from './ui/button'
function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showComponent, setShowComponent]= useState(false)
  const toggleSidebar= ()=> {
    setIsCollapsed(!isCollapsed)
    setShowComponent(!showComponent)
  } 
  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'> 
      <div className='absolute right-[-20px] top-7'>
        <Button 
        onClick={toggleSidebar} 
        variant='secondary' 
        className='rounded-full p-4'>
          {showComponent ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
        <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                to: "/",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Friends",
                to: "/friends",
                icon: Contact2,
                variant: "ghost",
              },
              {
                title: "Transactions",
                to: "/transactions",
                icon: BadgeDollarSign,
                variant: "ghost",
              },
              {
                title: "Settings",
                to: "/settings",
                icon: Settings,
                variant: "ghost",
              },
              {
                title: "Logout",
                to: "/logout",
                icon: LogOut,
                variant: "ghost",
              },
            ]}
          />
    </div>
  )
}

export default SideNavbar