import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home/Home.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import './App.css';
import AboutUs from './Components/About/AboutUs.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Components/Contact/Contact.jsx'
import Villas from './Components/Villas/Villas.jsx'
import SingleVillas from './Components/Villas/SingleVillas.jsx'
AOS.init();
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/villas' element={<Villas />} />
          <Route path='/villa/:id' element={<SingleVillas />} />



        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
