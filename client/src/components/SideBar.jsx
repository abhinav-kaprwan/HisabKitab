import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function SideBar() {
    const sideBarData =[
        {
            title:"Home",
            icon:<HomeIcon/>,
            link:"/home"
        },
        {
            title:"Dashboard",
            icon:<DashboardIcon/>,
            link:"/dashboard"
        },
        {
            title:"Account",
            icon:<ManageAccountsIcon/>,
            link:"/account"
        },
        {
            title:"Logout",
            icon:<LogoutIcon/>,
            link:"/logout"
        }
    ]
  return (
    <div className='bg-cyan-950 w-60 h-100%'>
         <ul className=''>
                {sideBarData.map((val,key)=> (
                        <Link to={val.link}>
                            <li 
                            key={key}
                            className='border border-black-400 text-white flex flex-row h-full'
                            >
                                <div>{val.icon}</div>
                                <div>{val.title}</div>
                            </li>
                        </Link>
                    )
                )}
            </ul>
        
    </div>
  )
}

export default SideBar