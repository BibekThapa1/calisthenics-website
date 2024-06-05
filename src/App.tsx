import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import SideBar from "./components/SideBar"
import Skills from './components/Skills'
import Benefits from './components/Benefits'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Navigation/>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/benefits' element={<Benefits/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
