import React from 'react';
import styled from 'styled-components';

export default function FormFill() {
  return (
    <Content>
      <FormCard>
        <Form>
          <CompanyName>
            <h3>Qisqa formani to‘ldiring va malakali BEPUL konsultatsiyaga ega bo‘ling</h3>
            <label htmlFor="company-name">Kompaniya nomi</label>
            <input type="text" id='company-name' placeholder='Masalan: Web Solution' required />
            <CheckWrapper>
              <div className='check checked'>
              </div>
              <div className='check'>
              </div>
              <div className='check'>
              </div>
              <div className='check'>
              </div>
            </CheckWrapper>
            <BtnWrapper>
              <Back>Orqaga</Back>
              <Forward>Keyingisi</Forward>
            </BtnWrapper>
          </CompanyName>
        </Form>
      </FormCard>
    </Content>
  )
}
const Content = styled.div`
position: relative;
padding-top: 100px;
 &::before{
   content: '';
   z-index: -2;
   width: 100%;
   height: 100px;
   background: #F3F1FF;
   display: block;
   position: absolute;
   top: 45%;
   left: 0;
 }
`

const FormCard = styled.div`
  max-width: 800px;
  padding: 50px 120px;
  margin: 0 auto;
   background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(117, 131, 142, 0.04), 0px 8px 16px rgba(52, 60, 68, 0.1);
  border-radius: 5px;
  margin-bottom: 50px;
  position: relative;
  &::before{
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    left: 10px;
    width:97%;
    height: 10px;
    background: #08003F;
border-radius: 5px 5px 0px 0px;

  }

`

const Form = styled.form`
  max-width: 548px;

`

const CompanyName = styled.div`
  h3{
    font-weight: bold;
    margin-left: -40px;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.25px;
    color: #08003F;
    margin-bottom: 30px;
  }
  label{
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.15px;
  }
  input{
    padding-top: 20px;
    outline: none;
    padding-bottom: 31px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #EAF2F5;
    &::placeholder{
      font-weight: normal;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.15px;
      color: #AABBC6;
    }
  }
`

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  margin: 6px auto 0;
  .checked::before{
    content: '';
      display:block;
      height:10px;
      position: absolute;
      top: 2px;
      left: 5px;
      transform: rotate(45deg);
      width: 6px;
      border-bottom: 2px solid #08003F;
      border-right: 2px solid #08003F;
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

const BtnWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 27px;
`
const Back = styled.button`
  background: #F3F1FF;
  border-radius: 10px;
  padding: 14px 51px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  filter: drop-shadow(0px 0px 2px rgba(117, 131, 142, 0.04)) drop-shadow(0px 4px 8px rgba(52, 60, 68, 0.16));
  color: #AABBC6;
`
const Forward = styled.button`
  background: #08003F;
  border-radius: 10px;
  padding: 14px 51px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  filter: drop-shadow(0px 0px 2px rgba(117, 131, 142, 0.04)) drop-shadow(0px 4px 8px rgba(52, 60, 68, 0.16));
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`