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
  const activeUz = useSelector(state => state.ui.activeUz)
  const activeRu = useSelector(state => state.ui.activeRu)




  const showHandler = () => {
    dispatch(uiActions.showSide())
  }

  const avtiveUzHandler = () => {
    dispatch(uiActions.showActiveUz())
  }
  const avtiveRuHandler = () => {
    dispatch(uiActions.showActiveRu())
  }

  return (
    <Head show={show} active={activeUz}>
      <div className="container flex">
        <Menu onClick={showHandler}>
          {!show ? <GiHamburgerMenu color='#fff' size={26} /> : < AiOutlineClose color='white' size={26} />}
          <span> Menu </span>
        </Menu>
        <Logo />
        <Wrapper>
          <Socials />
          <Lang>
            <span className={activeUz ? "active" : ""} onClick={avtiveUzHandler}>UZ</span>
            |
            <span className={activeRu ? "active" : ""} onClick={avtiveRuHandler}>RU</span>
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
  width: 75px;
  font-weight: normal;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  letter-spacing: 0.15px;
  span{
    cursor: pointer;
    padding-bottom: 5px;
  }
  .active{
      box-shadow: 0 2px 0 0 #15E7BD;
    }
`
