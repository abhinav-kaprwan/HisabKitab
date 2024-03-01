import React from 'react'
import { Header,Login,Register } from './components'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout