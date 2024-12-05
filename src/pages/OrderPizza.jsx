import React from 'react'
import "../css/OrderPizza.css"
import OrderPizzaForm from '../components/OrderPizzaForm'


export default function OrderPizza() {
  return (
    <body className="container">
      <header className="header">
        <img className="img" src="./images/iteration-1-images/logo.svg" alt="" />
      </header>
      
      <img className="sub-img" src="./images/iteration-2-images/pictures/form-banner.png" alt="" />
       
    <div className="main-content">
      <section className="product">
      <h2>Position Absolute Acı Pizza</h2>
      <p style={{fontWeight:'bold'}}>85.50₺</p>
      <p>
        Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı
        pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir...Küçük bir pizzaya bazen pizzatta denir.
      </p>
    </section>
    <OrderPizzaForm/>
    
  </div>
</body>
  )
}
