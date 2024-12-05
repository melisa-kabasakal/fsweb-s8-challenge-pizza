import React from 'react'
import "../css/Success.css"
import Footer from '../components/Footer'


function Success() {
  return (
    <>
    <div className='success'>
      <img className='img-success' src="./images/iteration-1-images/logo.svg" />
      <p className='text-top'>lezzetin yolda</p>
      <p className='text'>SİPARİŞ ALINDI!</p>
      
    </div>
    <Footer/>
    </>
  )
}

export default Success