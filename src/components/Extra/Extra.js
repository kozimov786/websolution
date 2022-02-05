import React from 'react';
import styled from 'styled-components';

import extraImg1 from '../../images/add1.svg';
import extraImg2 from '../../images/add2.svg';
import extraImg3 from '../../images/add3.svg';
import extraImg4 from '../../images/add4.svg';
import extraImg5 from '../../images/add5.svg';



export default function Extra() {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="title">Qo‘shimcha xizmat turlari</h3>
        <p className='decr'>Sizga web sayt yoki mobile ilovalar kerakmi? Bizga qo‘ng‘iroq qiling! Bizning web dizayn studiyamiz sizga web sayt dizaynidan tashqari bir qancha quyidagi xizmat turlarini taklif etadi</p>
        <ExtraList>
          <li>
            <img src={extraImg1} alt="" />
            <p>Internet magazin tayyorlash</p>
          </li>
          <li>
            <img src={extraImg2} alt="" />
            <p>SMM xizmatlarini ko‘rsatish</p>
          </li>
          <li>
            <img src={extraImg3} alt="" />
            <p>Seo xizmatlarini ko‘rsatish</p>
          </li>
          <li>
            <img src={extraImg4} alt="" />
            <p>Logo va brending</p>
          </li>
          <li>
            <img src={extraImg5} alt="" />
            <p>Kontekstli reklama</p>
          </li>
        </ExtraList>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-bottom: 150px;
background-color: #F9F8FF;
z-index: -2;
.decr{
  width: 720px;
  margin:0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
}
h3{
  position: relative;
  z-index: 99;
  padding-top: 20px;
  margin-left: -120px;
  &::before{
    content: '';
    z-index: 1;
  }
  &::after{
  content: '';
  display: block;
  position: absolute;
  top: -20px;
  right: 200px;
  width: 1200px;
  z-index: -1;
  height: 140px;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.07), 0px 6px 8px rgba(0, 0, 0, 0.07), 0px 4px 4px rgba(0, 0, 0, 0.07), 0px 2px 2px rgba(0, 0, 0, 0.07), 0px 1px 1px rgba(0, 0, 0, 0.07);
border-radius: 5px 0px 0px 5px;
transform: matrix(-1, 0, 0, 1, 0, 0);
}
}

`

const ExtraList = styled.ul`
display: flex;
align-items: center;
position: relative;
margin-left: 280px;
padding-top: 100px;
z-index: 1;
&::before{
  content: '';
  width: 1220px;
  display: block;
  position: absolute;
  z-index: -1;
  top:20px;
  margin-left: -30px;
  height: 202px;
  background-color: rgba(8, 0, 63, 1);
}
li{
  width: 175px;
  height: 175px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 30px;
  padding: 22px;
  box-shadow: 0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12);
border-radius: 5px;
p{
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
}
}
 img{
width: 65px;
height: 65px;
 }
`