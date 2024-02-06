import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/login'
import Vote from './components/Vote'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Vote' element={<Vote/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App