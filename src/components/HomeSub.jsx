import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'


const IconContainer = styled.section`
    border: 2px solid #FDC913;
    overflow: hidden;
    max-height: 55px;
    max-width: 100%;
    margin-left: 5rem;
    margin-right: 5rem;
    padding: .5rem 0;
    border: none;

`
const IconList = styled.ul`
 display: flex;
 justify-content: space-between;
 padding: 0;
 margin: 0;

`
const IconItems = styled.li`
   list-style-type: none;
   display: flex;
   justify-content:center;
   align-items: center;
   gap:.8rem;
   flex:1;
`
const Iconİmg = styled.img`
max-width:30px;
`
const IconText = styled.span`
font-size:.8rem 
`

const ContainerCart = styled.div`
position:absolute;
left:135px;
top:298px; 

`
const Cart = styled.div`
    background-image: url("./images/iteration-2-images/cta/kart-1.png");
    background-size: cover;
    border: 2px solid #FDC913;
    overflow: hidden;
    height: 250px;
    width: 300px;
    margin-left: 90px;
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
position:absolute;
right:140px;
top:298px;

`
const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FAF7F2;

`
const Sub = styled.div`
margin-right: 30%;
margin-top: 250px;
`

const SubNote = styled.h4`
color:#CE2829;
font-family: 'Satisfy', cursive;
padding-top: .5rem;
`
const SubTitle = styled.h3`
color:#090101;
font-size:30px;
width: 20px;
display: flex;
white-space: nowrap;
`

function HomeSub() {
  return (
    <>
    <Container>
        <IconContainer>
           <IconList >
            <IconItems>
            <Iconİmg src='./images/iteration-2-images/icons/1.svg'/>
            <IconText>YENİ! Kore</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/2.svg'/>
            <IconText>Pizza</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/3.svg'/>
            <IconText>Burger</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/4.svg'/>
            <IconText>Kızartmalar</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/5.svg'/>
            <IconText>Fast Food</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/6.svg'/>
            <IconText>Gazlı İçecek</IconText>
            </IconItems>
           </IconList>
        </IconContainer>
        
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
            <CourierText>Çoooook</CourierText>
             <Courier>hızlı npm gibi kurye</Courier>
             <CartButon>SİPARİŞ VER</CartButon>
        </CourierContainer>
        </PositionContainer>

        <Sub>

        <SubNote>en çok paketlenen menüler</SubNote>
        <SubTitle>Acıktıran Kodlara Doyuran Lezzetler</SubTitle>
        </Sub>

        <IconContainer>
           <IconList >
            <IconItems>
            <Iconİmg src='./images/iteration-2-images/icons/1.svg'/>
            <IconText>Ramen</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/2.svg'/>
            <IconText>Pizza</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/3.svg'/>
            <IconText>Burger</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/4.svg'/>
            <IconText>French Fries</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/5.svg'/>
            <IconText>Fast Food</IconText>
            <Iconİmg src='./images/iteration-2-images/icons/6.svg'/>
            <IconText>Soft Drinks</IconText>
            </IconItems>
           </IconList>
        </IconContainer>

    </Container>
    <Footer />
 
  </>
  )
}

export default HomeSub