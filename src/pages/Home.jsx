import React from 'react'
import "../css/Home.css"
import { useHistory } from 'react-router-dom'
import HomeSub from '../components/HomeSub'

function Home() {

  const history = useHistory()

  const handleClick = () => {
    console.log('Butona tıklandı!')
    history.push('/orderpizza')
  }
  
  return (
    <>
    <div className='home'>
      <img className="img-home" src="../images/iteration-1-images/logo.svg" />
      <p className='lezzet'>fırsatı kaçırma</p>
      <p className='code'>KOD ACIKTIRIR</p>
      <p className='code'>PİZZA, DOYURUR</p>
      <input type="button" value="ACIKTIM" id="acıktım" onClick={handleClick} />
    </div>
     <HomeSub/>
     </>
  )
}

export default Home;

