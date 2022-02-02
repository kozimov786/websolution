import React from 'react';
import styled from 'styled-components';

import WhyImg1 from '../../images/choose-1.svg';
import WhyImg2 from '../../images/choose-2.svg';
import WhyImg3 from '../../images/choose-3.svg';
import WhyImg4 from '../../images/choose-4.svg';



export default function WhyUs() {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">Nega bizni tanlashingiz kerak?</h2>
        <p>Chunki biz sizga haqiqatdan ham chiroyli va eng kerakli jihatlarga ega saytlarni tayyorlab beramiz</p>
        <WhyList>
          <WhyItem>
            <div>
              <img src={WhyImg1} alt="" />
            </div>
            <p>100 dan ortiq amalga oshirilgan loyihalar</p>
          </WhyItem>

          <WhyItem>
            <div>
              <img src={WhyImg2} alt="" />
            </div>
            <p>50 dan ortiq doimiy mijozlar</p>
          </WhyItem>

          <WhyItem>
            <div>
              <img src={WhyImg3} alt="" />
            </div>
            <p>Yuqori malakali mutaxassislar</p>
          </WhyItem>

          <WhyItem>
            <div>
              <img src={WhyImg4} alt="" />
            </div>
            <p>Har bir mijozga alohida yondashuv</p>
          </WhyItem>
        </WhyList>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-top: 50px;
padding-bottom: 50px;
 h2{
   margin-bottom: 20px;
 }
 p{
   width: 457px;
   margin: 0 auto;
   text-align: center;
   font-weight: normal;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #343C44;
 }
`
const WhyList = styled.ul`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 30px;
`

const WhyItem = styled.li`
width: 160px;
display: flex;
flex-direction: column;
div{
  border: 5px solid #08003F;
  border-radius: 5px;
  margin-bottom: 20px;
  img{
   width: 120px;
   height: 120px;
   margin: 20px;

 }
}

 p{
   width: 100%;
 }
`