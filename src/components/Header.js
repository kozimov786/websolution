import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai'

import { uiActions } from '../redux/uiReducer';

import Socials from './Socials';
import Logo from './Logo';

export default function Header(props) {
  const dispatch = useDispatch()
  const show = useSelector(state => state.ui.show)


  const showHandler = () => {
    dispatch(uiActions.showSide())

  }

  return (
    <Head show={show}>
      <div className="container flex">
        <Menu onClick={showHandler}>
          {!show ? <GiHamburgerMenu color='#fff' size={26} /> : < AiOutlineClose color='white' size={26} />}
          <span> Menu </span>
        </Menu>
        <Logo />
        <Wrapper>
          <Socials />
          <Lang>
            <span className='uz'>UZ</span>
            |
            <span className='ru'>RU</span>
          </Lang>
        </Wrapper>
      </div>
    </Head >
  );
}

const Head = styled.header`
  background-color:${props => !props.show ? "#08003F" : "#15E7BD"};
  color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span{
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    margin-left: 10px;
  }
`


const Wrapper = styled.div`
 display: flex;
 align-items: center;
`
const Lang = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.15px;
 .uz{
   margin-right: 10px;
   cursor: pointer;
 }
 .ru{
   margin-left: 10px;
   cursor: pointer;
 }
`
