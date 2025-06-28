import React from 'react'
import './ProductsCard.css'
import AppContext from '../context/AppContext'
import { useContext } from 'react'
import './ProductsCard.css'
import formatCurrency from "../utis/formatCurrency"
const ProductsCard = ({data}) => {
    const {title, thumbnail, price} = data
    const {cartItems, setCartItems} = useContext(AppContext)

    const handleAdd = () => {
        setCartItems([...cartItems, data])
        
    }
  return (
    <div className='product-card'>
        <img src={thumbnail} alt="thumbnail" className='card__image'/>
        <div className='card__info'>
            <p className='card__price'>{title}</p>
            <p className='card__title'>{formatCurrency(price, 'USD')}</p>          
        </div>
        <button type="button" onClick={handleAdd} className='button__add-card'>Adicionar</button>
        
    </div>
  )
}

export default ProductsCard