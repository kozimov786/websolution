import React from 'react';
import styled from "styled-components";


import SliderImg from '../../images/carousel.png'


export default function PortfolioItem() {
  return (
    <SlideItem>
      <div>
        <img src={SliderImg} alt="" />
      </div>
      <SliderInfo>
        <dl>
          <div>
            <dd>Mijoz</dd>
            <dt>Azon Tv</dt>
          </div>
          <div>
            <dd>Tayyorlangan yili:</dd>
            <dt>2021</dt>
          </div>
          <div>
            <dd>Web sayt turi:</dd>
            <dt>Madaniy ma’rifiy va onlayn telekanal</dt>
          </div>
          <div>
            <dd>Web sayt yo‘nalishii:</dd>
            <dt>Landing page</dt>
          </div>
        </dl>
        <button className="btn">Buyurtma berish</button>
      </SliderInfo>
    </SlideItem>
  )
}

const SlideItem = styled.div`
display: flex !important;
align-items: center;
 img{
  width: 700px;
  height: 400px;
  margin-right: 62px;
 }
`

const SliderInfo = styled.div`
 dl{
   div{
     margin-bottom: 20px;
   }
 }
 dd{
   margin-left: 0;
   font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 0.25px;
 }
 dt{
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #343C44;
 }
`