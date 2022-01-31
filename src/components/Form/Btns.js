import React from 'react';
import styled from 'styled-components';

export default function Btns({ onForward, onPrevHandler, index }) {
  return <BtnWrapper>
    {
      index === 1 ? <button className="btn-disabled form-disabled__btn" disabled>Orqaga</button> : <Back className='btn' type='submit' onClick={onPrevHandler}>Orqaga</Back>
    }
    <Forward className='btn' type='submit' onClick={onForward} >Keyingisi</Forward>
  </BtnWrapper >
}



const BtnWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 27px;
 .form-disabled__btn{
   margin-right: 20px;
 }
`
const Back = styled.button`
  filter: drop-shadow(0px 0px 2px rgba(117, 131, 142, 0.04)) drop-shadow(0px 4px 8px rgba(52, 60, 68, 0.16));
  margin-right: 20px;
  padding: 14px 51px;
`
const Forward = styled.button`
  padding: 14px 51px;
  filter: drop-shadow(0px 0px 2px rgba(117, 131, 142, 0.04)) drop-shadow(0px 4px 8px rgba(52, 60, 68, 0.16));
`