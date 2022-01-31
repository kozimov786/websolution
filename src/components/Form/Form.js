import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../redux/uiReducer';

import Check from './Check'
import Btns from './Btns';

export default function FormFill() {
  const inputRef = useRef()
  const inputType = useRef()
  const inputNumber = useRef()
  const inputInfo = useRef()


  const index = useSelector(state => state.ui.index)
  const message = useSelector(state => state.ui.errorMessage)

  const dispatch = useDispatch()
  const onForward = () => {
    console.log(inputRef.current.value)
    if (inputRef.current.value !== '' || inputType.current.value !== '' || inputNumber.current.value !== '' || inputInfo.current.value !== '') {
      dispatch(uiActions.nextHandler(1))
    } else {
      dispatch(uiActions.errorMessage("Iltimos formani to'ldiring !"))
    }
  }

  const onPrevHandler = () => {
    dispatch(uiActions.prevHandler(1))
  }

  const homeHandler = () => {
    dispatch(uiActions.resetHandler(1))
  }

  console.log(index);

  return (
    <Content>
      <FormCard>
        <Form onSubmit={e => e.preventDefault()}>
          <CompanyName className={index === 1 ? 'active-tab' : ''}>
            <h3 className='form-heading'>Qisqa formani to‘ldiring va malakali BEPUL konsultatsiyaga ega bo‘ling</h3>
            <label className='form-label' htmlFor="company-name">Kompaniya nomi</label>
            <input ref={inputRef} className='form-input' type="text" id='company-name' placeholder='Masalan: Web Solution' />
            {message && <p className='error-message'>{message}</p>}
            <Check index={index} />
            <Btns onForward={onForward} onPrevHandler={onPrevHandler} index={index} />
          </CompanyName>

          <CompanyType className={index === 2 ? 'active-tab' : ''}>
            <h3 className='form-heading'>Qisqa formani to‘ldiring va malakali BEPUL konsultatsiyaga ega bo‘ling</h3>
            <label className='form-label' htmlFor="company-type">Faoliyat turi</label>
            <input ref={inputType} className='form-input' type="text" id='company-type' placeholder='Masalan:Ishlab chiqarish' />
            <Check index={index} />
            <Btns onForward={onForward} onPrevHandler={onPrevHandler} index={index} />
          </CompanyType>

          <CompanyNumber className={index === 3 ? 'active-tab' : ''}>
            <h3 className='form-heading'>Qisqa formani to‘ldiring va malakali BEPUL konsultatsiyaga ega bo‘ling</h3>
            <label className='form-label' htmlFor="company-number">Telefon raqami</label>
            <input ref={inputNumber} className='form-input' type="number" id='company-number' placeholder='Masalan: +998996014747' />
            <Check index={index} />
            <Btns onForward={onForward} onPrevHandler={onPrevHandler} index={index} />
          </CompanyNumber>

          <CompanyInfo className={index === 4 ? 'active-tab' : ''}>
            <h3 className='form-heading'>Qisqa formani to‘ldiring va malakali BEPUL konsultatsiyaga ega bo‘ling</h3>
            <label className='form-label' htmlFor="company-info">Biz haqimizda qayerdan bildingiz?</label>
            <input ref={inputInfo} className='form-input' type="text" id='company-info' placeholder='Masalan: Telegram, Instagram' />
            <Check index={index} />
            <Btns onForward={onForward} onPrevHandler={onPrevHandler} index={index} />
          </CompanyInfo>

          <CompanyDone className={index === 5 ? 'active-tab' : ''}>
            <h3 className='form-heading'>Qisqa formani muvaffaqiyatli yakunladingiz</h3>
            <p>Malakali mutaxassislarimiz tez orada siz bilan aloqaga chiqishadi</p>
            <button className='btn' onClick={homeHandler}>Yakunlash</button>
          </CompanyDone>

        </Form>
      </FormCard>
    </Content >
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
 .error-message{
   position: absolute;
   top: 10px;
   left: 50%;
   transform: translateX(-50%);
   padding: 10px 20px;
   background-color: red;
   color: #FFFFFF;
   border-radius: 10px;
 }


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
  .form-heading{
    font-weight: bold;
    margin-left: -40px;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.25px;
    color: #08003F;
    margin-bottom: 30px;
  }
  .form-label{
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.15px;
  }
  .form-input{
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

const CompanyName = styled.div`
  display: none;
`

const CompanyType = styled.div`
 display: none;
`

const CompanyNumber = styled.div`
 display: none;
`
const CompanyInfo = styled.div`
 display: none;
`
const CompanyDone = styled.div`
 display: none;
 button{
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 20px auto 0;
 }

`