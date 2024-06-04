import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import SideBar from "./components/SideBar"

function App() {

  return (
    <Router>
      <Navigation/>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
