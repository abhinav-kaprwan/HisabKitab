import React from 'react'
import ReactDOM from 'react-dom/client'
import {Login,Home,Register,Dashboard} from './components'
import Layout from './Layout'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/register' element={<Register/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App