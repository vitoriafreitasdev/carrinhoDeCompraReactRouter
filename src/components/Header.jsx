import React from 'react'
import NavBar from './NavBar'
import CartButton from './CartButton'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='container containerHeader'>
            <NavBar/>
            <CartButton/>
        </div>
    </div>
  )
}

export default Header