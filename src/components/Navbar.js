import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

export default function Navbar() {
  return (
    <Nav>
      <div className="container flex">
        <ul className='about'>
          <li>
            <a href="/">Biz Haqimizda</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            < Socials />
          </li>
        </ul>
        <ul className='service'>
          <li>
            <h5>Xizmat turlari</h5>
          </li>
          <li>
            <a href="/">Sayt tayyorlash</a>
          </li>
          <li>
            <a href="/">Internet magazin tayyorlash</a>
          </li>
          <li>
            <a href="/">Seo qo‘llab-quvvatlash</a>
          </li>
          <li>
            <a href="/">Logo va brending</a>
          </li>
          <li>
            <a href="/">SMM xizmatlari</a>
          </li>
          <li>
            <a href="/">Mobil ilovalar tayyorlash</a>
          </li>
        </ul>
        <div className='contact'>
          <h5>Aloqa</h5>
          <a href="tel:+998 97 150 1300">+998 97 150 1300</a>
          <a href='/'>websolutionuz@gmail.com</a>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  height: 100%;
  background-color: #08003F;
  padding-top: 160px;
  padding-bottom: 160px;
  h5{
      font-weight: bold;
      font-size: 34px;
      line-height: 34px;
      letter-spacing: 0.25px;
      color: #fff;
      margin-bottom: 30px;
    }
    a{
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.5px;
      color: #fff;
      margin-bottom: 10px;
      &:hover{
        text-decoration: underline;
      }
    }

  .flex{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .about{
    a{
      font-weight: bold;
      font-size: 34px;
      line-height: 34px;
      letter-spacing: 0.25px;
      color: #fff;
      margin-bottom: 50px;
    }
  }

`
