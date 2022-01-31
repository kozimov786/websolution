import React from 'react';
import styled from 'styled-components';

export default function Check({ index }) {
  return <CheckWrapper>
    <div className={index === 1 ? 'checked' : 'checked'}>
    </div>
    <div className={index === 2 || index === 3 || index === 4 || index === 5 ? 'checked' : 'check'}>
    </div>
    <div className={index === 3 || index === 4 || index === 5 ? 'checked' : 'check'}>
    </div>
    <div className={index === 4 || index === 5 ? 'checked' : 'check'}>
    </div>
  </CheckWrapper>
}

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  margin: 6px auto 0;
  .checked{
    position: relative;
    width: 18px;
    height: 18px;
    border: 1.33333px solid #08003F;
    border-radius: 50%;
    &::before{
      display:block;
      height:10px;
      position: absolute;
      top: 2px;
      left: 5px;
      transform: rotate(45deg);
      width: 6px;
      border-bottom: 2px solid #08003F;
      border-right: 2px solid #08003F;
      content: '';
    }
    &::after{
      content: '';
      width: 40px;
      height: 1px;
      background-color: #08003F;
      position: absolute;
      display: block;
      top: 50%;
      left: 25px;
    }
  }
  .check{
    width: 18px;
    height: 18px;
    border: 1.33333px solid #08003F;
    border-radius: 50%;
    position: relative;

    &:not(:last-child){
      &::after{
      content: '';
      width: 40px;
      height: 1px;
      background-color: #08003F;
      position: absolute;
      display: block;
      top: 50%;
      left: 25px;
    }
    }
  }

`