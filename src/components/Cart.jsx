import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import CartItems from './CartItems'
import './Cart.css'
import formatCurrency from '../utis/formatCurrency'
formatCurrency
const Cart = () => {

    const {cartItems, cartVisible} = useContext(AppContext)
    let totalPrice = 0
    cartItems.forEach((item) => {
        totalPrice = item.price + totalPrice
    })
  return (
    <div className={`cart ${cartVisible ? 'cart--active' : ''}`}>
        <div className="cart-items">
            {cartItems.map((cartItem) => <CartItems key={cartItem.id} data={cartItem}/>)}
            <div className="cart-resume">
                Valor total: {formatCurrency(totalPrice, 'USD')}
            </div>
        </div>
    </div>
  )
}

export default Cart