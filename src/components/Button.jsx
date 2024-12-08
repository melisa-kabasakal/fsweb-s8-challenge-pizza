import React from 'react'
import "../css/Button.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function Button({ isFormValid, pizzaCount, add, removed, totalAmount, selectedMaterialsPrice }) {


  const history = useHistory()
  
  const handleOrder = () => {
    if(isFormValid){
      history.push('/success')
    }
  }

  return (
    <div className='lower'>
      <div className='button'>
        <button type="button" onClick={removed}>-</button>
        <span className='count'> {pizzaCount} </span>
        <button type="button" onClick={add}>+</button>
      </div>
    <div className= "card">
    <div body className='card-body' style={{backgroundColor:"#FAF7F2"}}>
      <h4 tag="p" style={{fontWeight: 'bold'}}>
        Sipariş Toplamı
      </h4>
      <p>Seçimler: {(selectedMaterialsPrice * pizzaCount)}₺</p>
      <p style={{color: 'red'}}>Toplam: {totalAmount.toFixed(1)}₺</p>
      </div>
      <button className='siparis' type='button' disabled={!isFormValid} onClick={handleOrder}>Sipariş Ver</button>
      </div>
    </div>
  )
}

export default Button


