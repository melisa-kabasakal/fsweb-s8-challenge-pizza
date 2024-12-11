
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

        <div className='order-summary'>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="middle">
          <div ><strong>Boyut: </strong> {boyut === 'small' ? 'S' : boyut === 'medium' ? 'M' : 'L'}</div>
          <div><strong>Hamur:</strong> {dough}</div>
          <div><strong>Ek Malzemeler:</strong> {ekMalzemeler}</div>
          </div>
          <div className="select">
          <h4>Sipariş Toplamı</h4>
          <div className="secim"><strong>Seçimler</strong> {selectedMaterialsPrice}₺</div>
          <div className="flex py-2 "><strong>Toplam</strong> {totalAmount}₺</div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;

