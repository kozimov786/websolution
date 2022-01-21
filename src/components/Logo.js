import React from 'react';
import { Link } from 'react-router-dom'
import LogoBlue from '../images/logo-blue.svg'
import LogoGreen from '../images/green-logo.svg'
import { useSelector } from 'react-redux'


function Logo() {

  const show = useSelector(state => state.ui.show)

  return <div>
    <Link to='/'>
      {!show ?
        <img src={LogoBlue} alt="logo" width={175} height={83} /> :
        <img src={LogoGreen} alt="logo" width={175} height={83} />
      }
    </Link>
  </div>;
}

export default Logo;
