import React from 'react'
import ReactDOM from 'react-dom/client'
import {Login,Home,Register,Dashboard,Friends,Transactions, Settings, Logout} from './components'
import Layout from './Layout'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Graph from './components/ui/Graph'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/dashboard/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Dashboard/>
      },
      {
        path:'friends',
        element:<Friends/>
      },
      {
        path:'transactions',
        element:<Transactions/>
      },
      {
        path:'settings',
        element:<Settings/>
      },
      {
        path:'logout',
        element:<Logout/>
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App