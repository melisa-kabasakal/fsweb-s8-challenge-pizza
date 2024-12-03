import React from 'react'
import "../css/Home.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Home() {

  const history = useHistory()

  const handleClick = () => {
    history.push('/orderpizza')
  }
  return (
    <div className='home'>
      <img className="img-home" src="./images/iteration-1-images/logo.svg" />
      <p className='text'>KOD ACIKTIRIR   PİZZA, DOYURUR</p>
      <input type="button" value="ACIKTIM" id="acıktım" onClick={handleClick}/>
    </div>
  )
}

export default Home

