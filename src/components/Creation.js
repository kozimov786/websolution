import React from 'react';
import styled from 'styled-components';

import Web1 from '../images/web-1.svg';
import Web2 from '../images/web-2.svg';
import Web3 from '../images/web-3.svg';
import Web4 from '../images/web-4.svg';
import Web5 from '../images/web-5.svg';
import Web6 from '../images/web-6.svg';


export default function Creation() {
  return (
    <div className="container">
      <Wrapper>
        <h2>Web sayt yaratishga nimalar kiradi?</h2>
        <CardList>
          <CardItem className='one'>
            <img src={Web1} alt="" />
            <p>Yaxshi o‘ylangan va funksional prototip tayyorlash</p>
          </CardItem>

          <CardItem className='two'>
            <img src={Web2} alt="" />
            <p>Chiroyli va sotuvga qaratilgan websayt dizaynini tayyorlash</p>
          </CardItem>

          <CardItem className='three'>
            <img src={Web3} alt="" />
            <p>Barcha qurilmalarga moslashuvchi adaptiv dizayn tayyorlash</p>
          </CardItem>

          <CardItem className='four'>
            <img src={Web4} alt="" />
            <p>To‘g‘ri tuzilgan texnik tizim va tayyor dizaynni sifatli dasturlash</p>
          </CardItem>

          <CardItem className='five'>
            <img src={Web5} alt="" />
            <p>Dizaynni kerakli va sotuvga yo‘naltirilgan kontent bilan to‘ldirish</p>
          </CardItem>

          <CardItem className='six'>
            <img src={Web6} alt="" />
            <p>Websaytni ishga tushirishdan avval test qilib ko‘rish</p>
          </CardItem>
        </CardList>
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
   padding-bottom: 50px;
  h2{
    font-weight: 800;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.25px;
    color: #08003F;
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    &:before {
      content: "";
      width: 200px;
      z-index: 0;
      height: 5px;
      background-color: #15E7BD;
      position: absolute;
      bottom:5px;
      left: 150px;
      display: block;
    }
  }
`

const CardItem = styled.li`
  width: 386px;
  height: 386px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 46px 79px;
  align-items: center;
  border-radius: 5px;
  position: relative;


  &::before{
    display: block;
    font-weight: 800;
    font-size: 50px;
    line-height: 140%;
    color: #15E7BD;
    position: absolute;
    top: 0;
    left: 10px;
  }


  p{
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.5px;
  }
  img{
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
`

const CardList = styled.ul`
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  .one::before{
    content: '01';
  }
  .two::before{
    content: '02';
  }
  .three::before{
    content: '03';
  }
  .four::before{
    content: '04';
  }
  .five::before{
    content: '05';
  }
  .six::before{
    content: '06';
  }
`