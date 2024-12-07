import React from 'react'
import styled from 'styled-components'
//"./images/iteration-1-images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';


const FooterContainer = styled.footer`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   background-color: #292929;
   color: white;
   height: auto; 
   padding: 40px 40px;
   flex-wrap: wrap;
   

   @media (max-width: 420px) {
    justify-content: flex-start;
      padding: 10px;
   }

   @media (max-width: 540px) {
    justify-content: flex-start;
      padding: 10px;
   }
   @media (max-width: 768px) {
      flex-direction: column; 
      padding: 20px;
   }
   
   
`
const FooterBottomItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #292929;
   color:white;
   height: 50px;
   width: 100vw;
   padding: 0 2rem;
  

`
const FooterTitle = styled.img`
padding-bottom: 2rem;
`


const AddressSection = styled.section`

`
const AddressInfo = styled.div`
padding-bottom: 1rem;

`
const AddressIcon = styled.img`
   width: 28px;
   height: 28px;

`
const FooterList = styled.div`

`
const FooterListTitle = styled.h3`
padding-bottom: 10px;
margin-top: 15px;

`

const FooterUl = styled.ul`

`
const ListItem = styled.li`
   list-style-type: none;
   padding-bottom: 7px;

`
const InstContainer = styled.div`

`
const InstImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #FDC913;
    border:none;
    max-width: 330px;
    max-height: 200px;
    overflow: hidden;
    gap:0.5rem;

    @media (max-width: 420px) {
        display:flex;
        flex-wrap:wrap;
    }

`
const InstTitle = styled.h3`

`
const InstImg = styled.img`
display:flex;
flex-wrap:wrap;

`

const FooterBottom = styled.div`

`


function Footer() {
  return (
    <>
    <FooterContainer>
        
        <AddressSection>
            <FooterTitle src='./images/iteration-2-images/footer/logo-footer.svg'/>
            <AddressInfo>
                <AddressIcon src='./images/iteration-2-images/footer/icons/icon-1.png'/><span> 341 Londonderry Road,Istanbul Türkiye</span>
            </AddressInfo>
            <AddressInfo>
                <AddressIcon src='./images/iteration-2-images/footer/icons/icon-2.png'/><span> aciktim@teknolojikyemekler.com</span>
            </AddressInfo>
            <AddressInfo>
                <AddressIcon src='./images/iteration-2-images/footer/icons/icon-3.png'/><span> +90 216 123 45 67</span>
            </AddressInfo>
        </AddressSection>
        <FooterList>
            <FooterUl>
                <FooterListTitle>Hot Menu</FooterListTitle>
                <ListItem>Terminal Pizza</ListItem>
                <ListItem>5 Kişilik Hackathlon Pizza</ListItem>
                <ListItem>useEffect Tavuklu Pizza</ListItem>
                <ListItem>Beyaz Console Frosty</ListItem>
                <ListItem>Testler Geçti Mutlu Burger</ListItem>
                <ListItem>Position Absolute Acı Burger</ListItem>
            </FooterUl>
        </FooterList>
        
        <InstContainer>
           <InstTitle>Instagram</InstTitle>
           <InstImgContainer>
            <InstImg src='./images/iteration-2-images/footer/insta/li-0.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-1.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-2.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-3.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-4.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-5.png'/>
            </InstImgContainer>
        </InstContainer>
    </FooterContainer>
    <FooterBottomItem>
        <FooterBottom>© 2023 Teknolojik Yemekler.</FooterBottom>
        <FontAwesomeIcon icon={faSquareTwitter}  style={{padding: '10px'}} />
    </FooterBottomItem>

    </>
  )
}

export default Footer