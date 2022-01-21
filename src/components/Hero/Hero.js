import React from 'react';
import styled from 'styled-components';

import HeroImg from '../../images/Illustartion07.svg'

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="container flex">
        <Info>
          <h1>Web va Mobil ilova dizaynlarini tayyorlaymiz</h1>
          <button className='btn'>Buyurtma berish</button>
        </Info>
        <HeroImgWrapper>
          <img src={HeroImg} alt="" width={609} height={552} />
        </HeroImgWrapper>
      </div>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.div`
padding-top: 50px;
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Info = styled.div`
  h1{
    font-weight: bold;
    width: 575px;
    font-size: 60px;
    line-height: 130%;
    letter-spacing: -0.5px;
    color: #08003F;
    margin-bottom: 60px;
    margin-right: 20px;
  }
`
const HeroImgWrapper = styled.div`

`
