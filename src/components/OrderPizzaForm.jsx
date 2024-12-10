
import Button from './Button'
import Materials from './Materials'
import "../css/OrderPizzaForm.css"
import axios from 'axios'; 
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function OrderPizzaForm({ setOrderData }) {
    const [size, setSize] = useState('')
    const [selectMaterials, setSelectMaterials] = useState([])
    const [isim, setIsim] = useState('')
    const [notes, setNotes] = useState('')
    const [dough, setDough] = useState('')
    const [pizzaCount, setPizzaCount] = useState(1)
    const [error, setError] = useState('')
    
    const history = useHistory(); 

    const handleSize = (event) =>{
        setSize(event.target.value)
    }
    

    const handleSelectMaterials = (event) => {
        const material = event.target.value
        setSelectMaterials((items) => 
            event.target.checked ? [...items, material]: items.filter((item) => item !== material)
        )
    }

    const handleNameChange = (event) => {
        setIsim(event.target.value)
    }
    const handleNotesChange = (event) => {
        setNotes(event.target.value)
    }

    const handleDoughChange = (event) => {
        setDough(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const selectedMaterialsPrice = selectMaterials.length * 5
        const basePrice = 85.5
        const totalAmount = (basePrice + selectedMaterialsPrice) * pizzaCount

        const orderData = {
            isim: isim,
            boyut: size,
            materials: selectMaterials,
            note: notes,
            dough: dough,
            pizzaSayisi: pizzaCount,
            totalAmount: totalAmount,
            selectedMaterialsPrice: selectedMaterialsPrice,
        }
        console.log('Gönderilen Order Data:', orderData)
    
    

    axios
        .post('https://reqres.in/api/pizza', orderData)
        .then((res) => {
            console.log(res)
            if (res.data && res.data.id) {
                setOrderData(orderData)

                history.push('/success');
                console.log('Sipariş Özeti:', res.data);
            } else {
                console.error('Response data hatalı:', res.data)
                setError('Sipariş alınamadı.')
                history.push('/orderpizza')
            }
        })
        .catch((error) => {
            console.error('Sipariş sırasında bir hata oluştu:', error);
            if (error.response) {
                setError('Lütfen tekrar deneyin.');
                console.error('Server response:', error.response);
            } else if (error.request) {
                setError('İnternete bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.');
                console.error('İstek atıldı yanıt alınamadı:', error.request);
            } else {
                setError('Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
                console.error('Error message:', error.message);
            }
            history.push('/orderpizza');
        })
}
const isFormValid = size && selectMaterials.length >= 4 && selectMaterials.length <= 10 && isim.length >= 3 && dough && pizzaCount > 0


  const addPizza = () => {
    setPizzaCount(pizzaCount + 1)
  }

  const removePizza = () => {
    if (pizzaCount > 1) {
      setPizzaCount(pizzaCount - 1)
    }
  } 

  const selectedMaterialsPrice = selectMaterials.length * 5 
  const basePrice = 85.5
  const totalAmount = (basePrice + selectedMaterialsPrice) * pizzaCount
  

 

    
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='size'>
                <div className="radio-container">
                    <h4 style={{fontSize:'18px'}}>Boyut Seç<span style={{color:'red'}}>*</span></h4>
                      <label className="radio-option">
                        <input type='radio' name='size' value="small" onChange={handleSize} checked={size === 'small'} data-cy="size-small"/>
                         <span>S</span>
                      </label>
                      <label className="radio-option">
                        <input type='radio' name='size' value="medium" onChange={handleSize} checked={size === 'medium'} data-cy="size-medium"/>
                        <span>M</span>
                      </label>
                      <label className="radio-option">
                       <input type='radio' name='size' value="large" onChange={handleSize} checked={size === 'large'} data-cy="size-large"/>
                       <span>L</span>
                       </label>
                </div>
                <div>
                <h4 style={{fontSize:'18px'}}>Hamur Seç<span style={{color:'red'}}>*</span></h4>
                <select className="dough" value={dough} onChange={handleDoughChange} data-cy="size-dough">
                    <option value="" >-Hamur Kalınlığı Seç-</option>
                    <option value="ince" >İnce</option>
                    <option value="normal" >Normal</option>
                    <option value="kalın" >Kalın</option>
                </select>
                </div>
            </div>
            
            <Materials handleSelectMaterials={handleSelectMaterials}/>
            <div className='name'>
            <label style={{fontWeight:'bold'}}>İsim<span style={{color:'red'}}>*</span></label>
            </div>
                <label>
                    <input type='text' id="name" value={isim} onChange={handleNameChange} />
                </label>
            <div className='notes'>
            <label style={{fontWeight:'bold'}}>Sipariş Notu</label>
              <div>
                <label>
                   <textarea placeholder='Siparişine eklemek istediğin bir not var mı?' value={notes} onChange={handleNotesChange}/>
                </label>
              </div>
            </div>
            <Button isFormValid={isFormValid} pizzaCount={pizzaCount} add={addPizza} removed={removePizza} handleSubmit={handleSubmit} selectedMaterialsPrice={selectedMaterialsPrice} totalAmount={totalAmount}/>
        </form>
    </div>
  )
}

export default OrderPizzaForm;
