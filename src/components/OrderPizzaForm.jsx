
import Button from './Button'
import Materials from './Materials'
import "../css/OrderPizzaForm.css"
import axios from 'axios'; 
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function OrderPizzaForm() {
    const [size, setSize] = useState('')
    const [selectMaterials, setSelectMaterials] = useState([])
    const [isim, setIsim] = useState('')
    const [notes, setNotes] = useState('');
    const [dough, setDough] = useState('');
    const [pizzaCount, setPizzaCount] = useState(0);
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

        const orderData = {
            isim: isim,
            boyut: size,
            ekMalzemeler: selectMaterials,
            note: notes,
            hamurKalınlığı: dough,
            pizzaSayisi: pizzaCount,
        }
    

    axios
        .post('https://reqres.in/api/pizza', orderData)
        .then((res) => {
            if (res.data && res.data.id) {
                setIsim('');
                setSize('');
                setSelectMaterials([]);
                setNotes('');
                setDough('');
                setPizzaCount(0);
                history.push('/success');
            } else {
                history.push('/orderpizza');
            }
        })
        .catch((error) => {
            console.error('Sipariş sırasında bir hata oluştu:', error);
            history.push('/orderpizza');
        });
};
const isFormValid = size && selectMaterials.length >= 4 && selectMaterials.length <= 10 && isim.length >= 3 && dough && pizzaCount > 0;


  const addPizza = () => {
    setPizzaCount(pizzaCount + 1);
  }

  const removePizza = () => {
    if (pizzaCount > 1) {
      setPizzaCount(pizzaCount - 1);
    }
  } 

  const selectedMaterialsPrice = selectMaterials.length * 5; 
  const basePrice = 85.5; 
  const totalAmount = (basePrice + selectedMaterialsPrice) * pizzaCount;
  

 

    
  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='size'>
                <div>
                <h4>Boyut Seç</h4>
                    <input type='radio' name='size' value="small" onChange={handleSize} checked={size === 'small'}/>
                    <label htmlFor='kucuk'>Küçük</label>

                    <input type='radio' name='size' value="medium" onChange={handleSize} checked={size === 'medium'}/>
                    <label htmlFor='orta'>Orta</label>
                
                    <input type='radio' name='size' value="large" onChange={handleSize} checked={size === 'large'}/>
                    <label htmlFor='buyuk'>Büyük</label>
                </div>
                <div>
                <h4>Hamur Seç</h4>
                <select value={dough} onChange={handleDoughChange}>
                    <option value="">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                </select>
                </div>
            </div>
            
            <Materials handleSelectMaterials={handleSelectMaterials}/>
            <div>
            <label>İsim:</label>
                <label>
                    <input type='text' id="name" value={isim} onChange={handleNameChange} minLength={3} required/>
                </label>
            </div>
            <div>
            <label>Sipariş Notu</label>
              <div>
                <label>
                   <textarea placeholder='Siparişine eklemek istediğin bir not var mı?' value={notes} onChange={handleNotesChange}/>
                </label>
              </div>
            </div>
            <Button isFormValid={isFormValid} pizzaCount={pizzaCount} add={addPizza} removed={removePizza} selectedMaterialsPrice={selectedMaterialsPrice} totalAmount={totalAmount}/>
        </form>
    </div>
  )
}

export default OrderPizzaForm;