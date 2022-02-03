import React from 'react';
import styled from 'styled-components';

import PriceLeft from '../../images/price-left.svg';
import PriceMiddle from '../../images/price-middle.svg';
import PriceRight from '../../images/price-right.svg';
import CheckIcon from '../../images/check.svg'


export default function Prices() {
  return (
    <Content>
      <div className="container">
        <h2 className="title title-left">Narx va tariflar</h2>

        <Cards>

          <Card className='side__card'>
            <CardHeader>
              <ImgWrapper>
                <img src={PriceLeft} alt="" />
              </ImgWrapper>
              <h4>Korporativ sayt</h4>
              <p><b>3 000 000</b>UZS</p>
              <span>*boshlang’ich narx</span>
            </CardHeader>
            <CardBody>
              <CardList>
                <li>
                  <p>Sayt boshqaruv tizimi</p>
                </li>
                <li>
                  <p>Adaptiv dizayn</p>
                </li>
                <li>
                  <p>Mahsulotlar katalogi</p>
                </li>
                <li>
                  <p>Yangiliklar / Modullar / Blog</p>
                </li>
                <li>
                  <p>Xosting va domen olishda ko‘maklashish</p>
                </li>
                <li>
                  <p>Bir yil davomida bepul texnik xizmat ko‘rsatish </p>
                </li>
                <li>
                  <p>Saytni o‘rgatish - 2 soat </p>
                </li>
                <li>
                  <p>Muddat - 20 kun</p>
                </li>
              </CardList>
              <btn className="btn btn-secondary">Buyurtma berish</btn>
            </CardBody>
          </Card>

          <Card className='middle'>
            <CardHeader className='middle__header'>
              <ImgWrapper>
                <img src={PriceMiddle} alt="" />
              </ImgWrapper>
              <h4>Landing Page</h4>
              <p><b>1 500 000</b>UZS</p>
              <span>*boshlang’ich narx</span>
            </CardHeader>
            <CardBody>
              <CardList>
                <li>
                  <p>Adaptiv dizayn</p>
                </li>
                <li>
                  <p>Tizimli tahlil qilish</p>
                </li>
                <li>
                  <p>Onlayn chat</p>
                </li>
                <li>
                  <p>e-mail pochta sozlamalari</p>
                </li>
                <li>
                  <p>Xosting va domen olishda ko‘maklashish</p>
                </li>
                <li>
                  <p>Bir yil davomida bepul texnik xizmat ko‘rsatish  </p>
                </li>
                <li>
                  <p>Saytni o‘rgatish - 1 soat </p>
                </li>
                <li>
                  <p>Muddat - 15 kun</p>
                </li>
              </CardList>
              <button className="btn btn__middle">Buyurtma berish</button>
            </CardBody>
          </Card>

          <Card className='side__card'>
            <CardHeader >
              <ImgWrapper>
                <img src={PriceRight} alt="" />
              </ImgWrapper>
              <h4>Internet Magazin</h4>
              <p><b>5 000 000</b>UZS</p>
              <span>*boshlang’ich narx</span>
            </CardHeader>
            <CardBody>
              <CardList>
                <li>
                  <p>Sayt boshqaruv tizimi</p>
                </li>
                <li>
                  <p>Adaptiv dizayn</p>
                </li>
                <li>
                  <p>Shaxsiy kabinet</p>
                </li>
                <li>
                  <p>Bepul domen</p>
                </li>
                <li>
                  <p>Click / Payme / Mastercard / Visa to‘lov tizimlari</p>
                </li>
                <li>
                  <p>Bir yil davomida bepul texnik xizmat ko‘rsatish </p>
                </li>
                <li>
                  <p>Saytni o‘rgatish - 3 soat </p>
                </li>
                <li>
                  <p>Muddat - 1 oy</p>
                </li>
              </CardList>
              <btn className="btn btn-secondary">Buyurtma berish</btn>
            </CardBody>
          </Card>

        </Cards>
      </div>
    </Content>
  )
}

const Content = styled.div`
padding-top: 100px;
padding-bottom: 130px;
background-color: #fff;
h2{
  margin-bottom: 110px;
  &::before{
    left: 400px;
  }
}
`

const Cards = styled.div`
display: flex;
align-items: center;
.side__card{
  position: relative;
  &::after{
    content: '';
    width: 90%;
    position: absolute;
    display: block;
    top: -10px;
    left: 10px;
    height: 10px;
    z-index: 0;
    background: #08003F;
    border-radius: 5px 5px 0px 0px;
  }
}
.middle{
  width: 466px;
  height: 800px;
  z-index: 999;
}
.middle__header{
  background-color: rgba(8, 0, 63, 1);
  height: 258px;
  h4,p,span,b{
  color: #fff;

  }
 }
`

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1);
  border-radius: 5px;
  .btn__middle{
    width: 180px;
    margin: 80px auto 0;
    display: block;
    border: 1px solid transparent;
  }
  .btn-secondary{
    border-color: #000;
    color: #000;
    width: 180px;
    margin: 60px auto 0;
    display: block;
  }
`

const CardHeader = styled.div`
 padding: 90px 72px 32px;
  position: relative;
  background: #F9F8FF;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
  border-radius: 5px 5px 0px 0px;
  text-align: center;
  h4{
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 0.25px;
    margin-bottom: 20px;
  }
  p{
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }
  b{
    font-weight: 900;
    font-size: 34px;
    line-height: 34px;
    letter-spacing: 0.25px;
    color: #08003F;
    opacity: 0.9;
    margin-right: 10px;
  }
  span{
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #343C44;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ImgWrapper = styled.div`
 position: absolute;
 top: 0px;
 left: 50%;
 z-index: 1;
 transform: translate(-50%,-50%);
 background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(117, 131, 142, 0.04), 0px 4px 8px rgba(52, 60, 68, 0.16);
border-radius: 5px;
img{
  width: 100px;
  height: 100px;
}
`

const CardBody = styled.div`
padding: 32px 30px;
`
const CardList = styled.div`
list-style-type: none;
 li{
  display: flex;
  align-items: center;
   margin-bottom: 10px;

   &::before{
   content: '';
   width: 16px;
   height: 16px;
   margin-right: 10px;
   background-image: url(${CheckIcon});
 }
 p{
    line-height: 28px;
    color: #343C44;
    font-weight: normal;
    width: 290px;
   }
 }
`