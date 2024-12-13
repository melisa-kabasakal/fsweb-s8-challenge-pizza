import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'



const IconContainer = styled.section`
    border: 2px solid #FDC913;
    overflow: hidden;
    max-width: 100%;
    padding: .5rem 0;
    border: none;
    background-color: #FFFFFF;
    width: 100vw;
    padding: 5px;
    height: 50px;

    @media (max-width: 480px) {
      display: grid;
    grid-template-columns: repeat(2, 1fr); 
    display: flex;
    justify-content:center ;
    align-items:center;
    min-height: 180px;
  }


    @media (max-width: 540px) {
      display: grid;
    grid-template-columns: repeat(2, 1fr); 
    display: flex;
    justify-content:center ;
    align-items:center;
    min-height: 180px;
  }

  @media (max-width: 768px) {
   
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    display: flex;
    justify-content:center ;
    align-items:center;  
    min-height: 180px;
  }
`
const IconList = styled.ul`
 display: flex;
 justify-content: center;
 align-items:center;
 

 

 @media (max-width: 480px) {
  display: grid;
    grid-template-columns: repeat(2, 1fr); 
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

 @media (max-width: 540px) {
  display: grid;
    grid-template-columns: repeat(2, 1fr); 
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    
  }

`
const Iconİmg = styled.img`
max-width:30px;
margin-left: 5px;
`
const IconText = styled.span`
font-size:.8rem ;
padding-left: 3px;

`
const Icon1Container = styled.section`
display: flex;
justify-content: center;
align-items: center;


    

    @media (max-width: 480px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items:center;
      align-items: center;    
      gap: 1rem;              
      width: 40%;
       
  } 

    @media (max-width: 540px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items:center;
      align-items: center;    
      gap: 1rem;              
      width: 40%;
      
  } 

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items:center;
      align-items: center;    
      gap: 1rem;              
      width: 40%;
  } 

`
const IconButton = styled.button`
min-width: 130px;
height: 50px;
border-radius: 50px;
color:black;
background-color: #FFFFFF;
font-family: Barlow;
margin: 0 10px;
   margin-bottom: 1rem;


   @media (max-width: 480px) {
    min-width: 130px;
    display: flex;
    align-items:center;
    gap:.5rem;
  }
  @media (max-width: 540px) {
    min-width: 130px;
    display: flex;
    align-items:center;
    gap:.5rem;
  }

@media (max-width: 768px) {
    min-width: 130px;
    display: flex;
    align-items:center;
    gap:.2rem;
    padding-left:10px;
  }

`

const ContainerCart = styled.div`

`
const Cart = styled.div`
    background-image: url("./images/iteration-2-images/cta/kart-1.png");
    background-size: cover;
    border: 2px solid #FDC913;
    overflow: hidden;
    height: 250px;
    width: 300px;
    border:none;

`
const CartTitle = styled.h3`
color:#FFFFFF;
font-size:40px;
width: 20px;
padding-left: 1rem;
padding-top: 1rem;

`
    
const CartText = styled.p`
color:#FFFFFF;
padding-left: 1rem;
`
    
const CartButon = styled.button`
width: 90px;
height: 30px;
border-radius: 30px;
color: #CE2829;
font-size: 10px;
background-color: #FFFFFF;
margin-left: 1rem;
`
const BurgerContainer = styled.div`
    background-image: url("./images/iteration-2-images/cta/kart-2.png");
    background-size: cover;
    border: 2px solid #FDC913;
    overflow: hidden;
    height: 125px;
    width: 300px;
    border:none;
`
const BurgerText = styled.h3`
color:#FFFFFF;
padding-left: 1rem;
font-size:30px;
`

const CourierContainer = styled.div`
    background-image: url("./images/iteration-2-images/cta/kart-3.png");
    background-size: cover;
    border: 2px solid #FDC913;
    overflow: hidden;
    height: 125px;
    width: 300px;
    border:none;
`

const CourierText = styled.p`
color:#CE2829;
padding-left: 1rem;
padding-top: 1rem;
font-family: Barlow;
font-size: 25px;
font-weight: 600;
line-height: 10px;
`
const Courier = styled.span`
padding-left: 1rem;
font-family: Barlow;
font-size: 25px;
font-weight: 600;

`
const PositionContainer = styled.div`
    border: 2px solid #FDC913;
    overflow: hidden;
    height: 250px;
    width: 300px;
    border:none;
    margin-top: -2px;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
  }

    @media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
  }

  @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
  }


`
const Position = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:1rem;
margin: 2rem;


@media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;

  }

@media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;

  }

  @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        

  }
`
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    background-color: #FAF7F2;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
       
  }

  @media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
       
  }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;   
  }
`
const Sub = styled.div`

 margin-top: -70px;
 text-align: center;

`

const SubNote = styled.h4`
color:#CE2829;
font-family: 'Satisfy', cursive;
padding-top: 5rem;
`
const SubTitle = styled.h3`
color:#090101;
font-size:30px;
margin: 1.5rem;

@media (max-width: 480px) {
        display: flex;
        flex-wrap:wrap;
        max-width: 230px;
        justify-content: center;
        align-items:center;   
  }
  @media (max-width: 540px) {
        display: flex;
        flex-wrap:wrap;
        max-width: 230px;
        justify-content: center;
        align-items:center;   
  }

@media (max-width: 768px) {
        display: flex;
        flex-wrap:wrap;
        max-width: 230px;
        justify-content: center;
        align-items:center;   
  }

`

const PicturesContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:1rem;
margin-top: 20px;

@media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;

  }

@media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;

  }

  @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;  
  }

`

const PictureConteiner = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem; 

   
`

const Picture = styled.div`
    background-image: url("./images/iteration-2-images/pictures/food-1.png");
    background-size: contain;
    background-position:top;
    border: 2px solid #FDC913;
    background-color: #FFFFFF;
    overflow: hidden;
    height: 400px;
    width: 300px;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    border:none;
    margin-bottom: 50px;

    @media (max-width: 480px) {   
         margin-bottom:5px; 
   }
   @media (max-width: 540px) {   
         margin-bottom:5px; 
   }

    @media (max-width: 768px) {   
         margin-bottom:5px; 
   }
`

const PictureText = styled.p`
    font-family: Barlow;
    font-weight: 600;
    padding-left:10px;
`
const PictureCount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;   
`
const Count1 = styled.p`
margin-left: 20px;
`
const Count2 = styled.p`
padding-left: 5rem;
`
const Count3 = styled.p`
font-weight: bold;
margin-right: 20px;
`

const Picture2 = styled.div`
    background-image: url("./images/iteration-2-images/pictures/food-2.png");
    background-size: contain;;
    border: 2px solid #FDC913;
    background-color: #FFFFFF;
    overflow: hidden;
    height: 400px;
    width: 300px;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    border:none;
    margin-bottom: 50px;

    @media (max-width: 480px) {   
         margin-bottom:5px; 
   }
   @media (max-width: 540px) {   
         margin-bottom:5px; 
   }

    @media (max-width: 768px) {   
         margin-bottom:5px; 
   }

`
const Picture3 = styled.div`
    background-image: url("./images/iteration-2-images/pictures/food-3.png");
    background-size: contain;
    border: 2px solid #FDC913;
    background-color: #FFFFFF;
    overflow: hidden;
    height: 400px;
    width: 300px;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    border:none;
    margin-bottom: 50px;
    
`

    

function HomeSub() {
  return (
    <>
    <Container>
        <IconContainer>
           <IconList >
           <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/1.svg'/>
            <IconText>YENİ! Kore</IconText>
            </IconButton>
            
            
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/2.svg'/>
            <IconText>Pizza</IconText>
            </IconButton>
            
            
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/3.svg'/>
            <IconText>Burger</IconText>
            </IconButton>
            
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/4.svg'/>
            <IconText>Kızartmalar</IconText>
            </IconButton>
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/5.svg'/>
            <IconText>Fast Food</IconText>
            </IconButton>
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/6.svg'/>
            <IconText>Gazlı İçecek</IconText>
            </IconButton>
           </IconList>
        </IconContainer>
        
        
        <Position >
        <ContainerCart>
        <Cart>
             <CartTitle>Özel Lezzetus</CartTitle>
             <CartText>Position: Absolute Acı Burger</CartText>
             <CartButon>SİPARİŞ VER</CartButon>
        </Cart>
        </ContainerCart>

        <PositionContainer>
        <BurgerContainer>
             <BurgerText>Hackathlon Burger Menü</BurgerText>
             <CartButon>SİPARİŞ VER</CartButon>
        </BurgerContainer>
        <CourierContainer>
            <CourierText>Çoooook </CourierText>
             <Courier>hızlı npm gibi kurye</Courier>
             <CartButon>SİPARİŞ VER</CartButon>
        </CourierContainer>
        </PositionContainer>
        </Position>
        

        <Sub>
        <SubNote>en çok paketlenen menüler</SubNote>
        <SubTitle>Acıktıran Kodlara Doyuran Lezzetler</SubTitle>
        </Sub>

        <Icon1Container>
           <IconList >  
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/1.svg'/>
            <IconText>Ramen</IconText>
            </IconButton>
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/2.svg'/>
            <IconText>Pizza</IconText>
            </IconButton>
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/3.svg'/>
            <IconText>Burger</IconText>
            </IconButton>
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/4.svg'/>
            <IconText>French Fries</IconText>
            </IconButton>
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/5.svg'/>
            <IconText>Fast Food</IconText>
            </IconButton>
            <IconButton>
            <Iconİmg src='./images/iteration-2-images/icons/6.svg'/>
            <IconText>Soft Drinks</IconText>
            </IconButton>
           </IconList>
        </Icon1Container>

        <PicturesContainer >

        <Picture >
        <PictureConteiner>
        <PictureText>Terminal Pizza</PictureText>
        <PictureCount>
        <Count1>4.9</Count1><Count2>(200)</Count2><Count3>60₺</Count3>
        </PictureCount>
        </PictureConteiner>
        </Picture>

        <Picture2>
        <PictureConteiner>
        <PictureText >Position Absolute Acı Pizza</PictureText>
        <PictureCount><Count1>4.9</Count1><Count2>(200)</Count2><Count3>60₺</Count3></PictureCount>
        </PictureConteiner>
        </Picture2>

        
        <Picture3>
        <PictureConteiner>
        <PictureText>useEffect Tavuklu Burger</PictureText>
        <PictureCount><Count1>4.9</Count1><Count2>(200)</Count2><Count3>60₺</Count3></PictureCount>
        </PictureConteiner>
        </Picture3>

        </PicturesContainer>

    </Container>
    <Footer />
 
  </>
  )
}

export default HomeSub