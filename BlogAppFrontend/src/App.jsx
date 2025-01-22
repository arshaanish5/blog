import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import AddBlogs from './components/AddBlogs'
import Navbar from './components/Navbar'
import Main from './components/Main'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route element={<PrivateRoutes/>}>
      <Route path='/blogs' element={<Main child={<Home/>}/>}></Route>
      <Route path='/addblogs' element={<Main child={<AddBlogs/>}/>}></Route>
      </Route>
    </Routes>

    </>
  )
}

export default App
