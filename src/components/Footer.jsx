import React from 'react'
import styled from 'styled-components'
//"./images/iteration-1-images/logo.svg"

const FooterContainer = styled.footer`
   display: flex;
   align-items: center;
   background-color: #292929;
   color:white;
   
`
const FooterTitle = styled.img`
    max-width: 20px;
    height: 10px;

`

const AddressSection = styled.section`

`
const AddressInfo = styled.div`

`
const AddressIcon = styled.img`

`
const FooterList = styled.div`

`
const FooterListTitle = styled.h3`

`

const FooterUl = styled.ul`

`
const Listİtem = styled.li`
   list-style-type: none

`
const InstContainer = styled.div`

`
const InstImg = styled.img`

`

const FooterBottom = styled.div`

`


function Footer() {
  return (
    <>
    <FooterContainer>
        
        <AddressSection>
            <FooterTitle src='./images/iteration-2-images/logo-footer.svg'/>
            <AddressInfo>
                <AddressIcon src='./images/iteration-2-images/icons/icon-1.png'/><span>341 Londonderry Road,Istanbul Türkiye</span>
            </AddressInfo>
            <AddressInfo>
                <AddressIcon src='./images/iteration-2-images/footer/icons/icon-2.png'/><span>aciktim@teknolojikyemekler.com</span>
            </AddressInfo>
            <AddressInfo>
                <AddressIcon src='./images/iteration-2-images/footer/icons/icon-3.png'/><span>+90 216 123 45 67</span>
            </AddressInfo>
        </AddressSection>
        <FooterList>
            <FooterUl>
                <FooterListTitle>Hot Menu</FooterListTitle>
                <Listİtem>Terminal Pizza</Listİtem>
                <Listİtem>5 Kişilik Hackathon Pizza</Listİtem>
                <Listİtem>useEffect Tavuklu Pizza</Listİtem>
                <Listİtem>Beyaz Console Frosty</Listİtem>
                <Listİtem>Testler Geçti Mutlu Burger</Listİtem>
                <Listİtem>Position Absolute Acı Burger</Listİtem>
            </FooterUl>
        </FooterList>
        <InstContainer>
            <InstImg src='./images/iteration-2-images/footer/insta/li-0.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-1.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-2.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-3.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-4.png'/>
            <InstImg src='./images/iteration-2-images/footer/insta/li-5.png'/>
        </InstContainer>

    </FooterContainer>
    <FooterBottom>© 2023 Teknolojik Yemekler.</FooterBottom>
    </>
  )
}

export default Footer