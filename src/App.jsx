import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import MenuSlider from './components/MenuSlider'
import BestSeller from './components/BestSeller'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative '>
    <Navbar />
    <Header/>
    <MenuSlider/>
    <BestSeller/>
    <Footer/>
    </div>
  )
}

export default App
