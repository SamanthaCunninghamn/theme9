import React, { useEffect } from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const Center = () => {

  useEffect(() => {
  
    setTimeout(() => {
      window.location.href = "/manager-account"
    }, 300);

  }, [])

  return (

    <>
      <Navbar/>
      <Header />
      <GetStarted />
      <GetInTouch />
      <Footer/>
    </>

  )
}

export default Center