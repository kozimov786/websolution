import React from 'react';
import styled from 'styled-components';

import { FaTelegramPlane } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'

export default function Socials() {
  return (
    <Social>
      <a href="/">
        <FaTelegramPlane color='white' size={24} />
      </a>
      <a href="/">
        <BsInstagram color='white' size={20} />
      </a>
      <a href="/">
        <FiFacebook color='white' size={20} />
      </a>
    </Social>
  );
}

const Social = styled.div`
   display: flex;
   align-items: center;
  a{
    margin-right:20px;
  }
`