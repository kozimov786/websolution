import React from 'react';
import styled from 'styled-components';

import serviceEcommerce from '../../images/service-ecommerce.svg';
import serviceLanding from '../../images/service-landing.svg';
import serviceSet from '../../images/service-setting.svg';
import serviceCorp from '../../images/service-corp.svg';
import serviceLast from '../../images/service-last.svg';


export default function Services() {
  return <Wrapper>
    <div className="container">
      <h2>Bizning xizmatlarimiz</h2>
      <ul>
        <li>
          <img src={serviceEcommerce} alt="" />
          <p>Internet magazin</p>
        </li>
        <li>
          <img src={serviceLanding} alt="" />
          <p>Landing Page</p>
        </li>
        <li>
          <img src={serviceSet} alt="" />
          <p>Texnik yordam</p>
        </li>
        <li>
          <img src={serviceCorp} alt="" />
          <p>Korporativ saytlar</p>
        </li>
        <li>
          <img src={serviceLast} alt="" />
          <p>Mukammal tizimlar</p>
        </li>
      </ul>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`
padding-top: 60px;
padding-bottom: 100px;
  h2{
    font-weight: 800;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.25px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #08003F;
    &:before {
      content: "";
      display: block;
      width: 200px;
      height: 10px;
      color: #000;
      position: absolute;
      top: 10px;
      right: 100px;
    }
  }
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 120px;
        height: 120px;
        margin-bottom: 20px;
      }
      p{
        font-weight: bold;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.5px;
      }
    }
  }
`