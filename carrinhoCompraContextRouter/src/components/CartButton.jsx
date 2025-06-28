import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import './CartButton.css'

const CartButton = () => {
    const {cartVisible, setCartVisible, cartItems} = useContext(AppContext)

  return (
    <button type='button' className='cart__buton' onClick={() => setCartVisible(!cartVisible)}>
        carrinho
        <span className='cart-status'>
          {cartItems.length}
        </span>
    </button>
  )
}

export default CartButton