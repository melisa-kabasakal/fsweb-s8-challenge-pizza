
import "../css/Success.css"
import Footer from '../components/Footer'



function Success({ orderData }) {
  console.log(orderData)

  if (!orderData) {
    return (
      <div className="error-message">
        <h2>Bir hata oluştu. </h2>
      </div>
    );
  }


  const { boyut, dough, materials, totalAmount, selectedMaterialsPrice } = orderData;

  let ekMalzemeler = "";
  materials.forEach((material, index) => {
    if (index !== 0) {
      ekMalzemeler += ", "; 
    }
    ekMalzemeler += material;
  });

  return (
    <>
      <div className='success'>
        <img className='img-success' src="./images/iteration-1-images/logo.svg" alt="Logo" />
        <p className='text-top'>Lezzetin Yolda</p>
        <p className='subtext-success'>SİPARİŞ ALINDI!</p>

        
          <h3 className="pizza">Position Absolute Acı Pizza</h3>
          <div className="middle">
          <div><p >Boyut: <strong>{boyut === 'small' ? 'S' : boyut === 'medium' ? 'M' : 'L'}</strong> </p></div>
          <div><p>Hamur: <strong>{dough === 'ince' ? 'Süpper İnce' : boyut === 'normal' ? 'Normal' : 'Kalın'} </strong></p></div>
          <div><p>Ek Malzemeler: <strong>{ekMalzemeler}</strong></p></div>
          </div>
          <div className="select">
          <h4>Sipariş Toplamı</h4>
          
            <div ><p className="secim">Seçimler <span className="price"> {selectedMaterialsPrice}₺</span></p> </div>
            <div><p className="secim">Toplam <span className="price">{totalAmount}₺ </span> </p> </div>
          
        </div>
        
        
      </div>
      <Footer />
    </>
  );
}

export default Success;

