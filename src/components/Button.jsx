import React from 'react'
import "../css/Button.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Card, CardText, CardTitle } from 'reactstrap'

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
        <button onClick={removed}>-</button>
        <span className='count'> {pizzaCount} </span>
        <button onClick={add}>+</button>
      </div>
      <div>
    <Card body>
      <CardTitle tag="p" style={{fontWeight: 'bold'}}>
        Sipariş Toplamı
      </CardTitle>
      <CardText>
        Seçimler: {(selectedMaterialsPrice * pizzaCount)}₺
      </CardText>
      <CardText style={{color: 'red'}}>
        Toplam: {totalAmount.toFixed(1)}₺
      </CardText>
      <button className='siparis' type='button' disabled={!isFormValid} onClick={handleOrder}>Sipariş Ver</button>
    </Card>
      </div>
    </div>
  )
}

export default Button

