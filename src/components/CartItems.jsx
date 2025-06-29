import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import './CartItems.css'
import formatCurrency from "../utis/formatCurrency"
const CartItems = ({data}) => {
    const {cartItems, setCartItems} = useContext(AppContext)
    const {id, thumbnail, title, price} = data
    const handleRemove = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id)
        setCartItems(updatedItems)
    }
  return (
    <div className='cart-item'>
        <img src={thumbnail} alt="imagem do produto" className='cart-item-image'/>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatCurrency(price, 'USD')}</h3>
        <button type='button' className='button__remove-item' onClick={handleRemove}>-</button>
    </div>
  )
}

export default CartItems