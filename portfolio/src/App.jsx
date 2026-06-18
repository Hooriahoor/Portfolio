import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import BlurBlob from './BlurBlob'

const App = () => {
  return (
    <div className='relative bg-[#050414] min-h-screen'>
      <BlurBlob position={{top:'30%',left:'20%'}} size={{width:'30%',height:'40%'}}></BlurBlob>
    <div
  className="
  absolute
  inset-0
  bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(to_right,#ffffff10_1px,transparent_1px)]
  bg-[size:24px_24px]
  "
></div>
    <div className='relative pt-20'>
      <Navbar/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
      
    </div>

    </div>
  )
}

export default App