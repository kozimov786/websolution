import React from 'react';
import styled from 'styled-components';

import HeroImg from '../../images/hero-img.svg';

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
      <div className="scroll-img">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="36" height="76" rx="18" stroke="#08003F" stroke-width="4" />
          <circle className='circle' cx="20" cy="20" r="16" fill="#15E7BD" />
        </svg>
      </div>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.div`
padding-top: 50px;
position: relative;
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .scroll-img{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 80px;
  }
  .circle{
    animation: animate 4s infinite linear;
  }
  @keyframes animate {
    to{
      transform: translateY(40px);
    }
    from{
      transform: translateY(0);
    }
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
