import React from 'react';
import styled from 'styled-components';

export default function AboutPage() {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">Biz Haqimizda</h2>
        <p>Biz Web Solution dizayn studiyasi yuqori malakali dizaynerlar jamoasi har qanday turdagi web saytlarni tayyorlash bilan shug‘ullanamiz. Bundan tashqari brending, neyming, logo va ijtimoiy tarmoqlarda sizning biznesingizni reklama qilish xizmatlarini ham amalga oshiramiz.</p>
        <p>Xizmatlarimizdan foydalanish uchun anketani to’ldiring yoki bizga qo‘ng‘iroq qiling.</p>
        <button className="btn">Anketa to'ldirish</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2{
    &::before{
      display: none;
      margin-bottom: 20px;
    }

  }
  p{
    font-weight: normal;
    width: 580px;
    margin: 0 auto;
font-size: 20px;
line-height: 28px;
letter-spacing: 0.5px;
color: #000000;
margin-bottom: 20px;
  }
  button{
    width: 180px;
    display:flex;
    justify-content: center;
    align-items: center;
   margin: 20px auto;
  }
`