import React, { useContext, useState } /*, { useContext, useEffect }*/  from 'react'
import './NavBar.css'
import AppContext from '../context/AppContext'
import fetchProducts from '../api/fetchProducts'
import CartButton from './CartButton'
import Cart from './Cart'
import './NavBar.css'
const NavBar = () => {
    const [search, setSearch] = useState('')
    const {setProducts} = useContext(AppContext)
    const handleSubmit = async(e) => {
        e.preventDefault()
        const products = await fetchProducts(search)
        setProducts(products)
    }
  return (
    
    <form className="search-bar" onSubmit={handleSubmit}>
        <input type="search"  value={search} placeholder='Buscar por produtos' className='search__input' onChange={({target}) => setSearch(target.value)} required/>
        <button type='submit' className="search__button">Enviar</button>
        {/* <CartButton/> */}
        
    </form >
  )
}

export default NavBar