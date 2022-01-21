import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Socials from './Socials';
import { useSelector } from 'react-redux'


export default function Footer() {
  const show = useSelector(state => state.ui.show)

  return (
    <Foot show={show}>
      <div className="container flex">
        <Logo />
        <FooterInfo>
          <button>Buyurtma Berish</button>
          <a href="tel:+998 97 150 1300">+998 97 150 13 00</a>
          <p>©Copyright 2020-2022. Designed by Web Solution design studio</p>
        </FooterInfo>
        <Socials />
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color:${props => !props.show ? "#08003F" : "#15E7BD"};
  color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: auto;
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const FooterInfo = styled.div`
  text-align: center;
  button{
    border: 1px solid #fff;
    color: #fff;
    margin-bottom: 62px;
    background-color: transparent;
    &:hover{
      background-color: #fff;
      color: #08003F;
    }
  }
  a{
    color: #fff;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 62px;

  }
  p{
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    padding: 0;
  }
`