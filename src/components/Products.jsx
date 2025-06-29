
import { Link } from "react-router-dom"
import React, { useContext, useEffect} from 'react'
import fetchProducts from '../api/fetchProducts'
import AppContext from '../context/AppContext'
import './Products.css'
import NavBar from "./NavBar"
import ProductsCard from "./ProductsCard"
import Loading from "./Loading"

const Products = () => {
    const {products, setProducts, loading, setLoanding} = useContext(AppContext)
    
      useEffect(() => {
          fetchProducts('Iphone').then((response) => {
              setProducts(response)
              setLoanding(false)
          })
      }, [])


  return (
    <div>
        {/* <NavBar/> */}
        {/* <h1 className="product-h1">Procure por um produto acima</h1>
        <p className="separarH1-H2"></p> */}
        {/* <h2 className="product-h2">Produtos:</h2> */}
        {/* {products && products.map((product) => <div key={product.id}><p>{product.title} - US {product.price} </p> <img src={product.thumbnail} alt="product iamge" /></div> )} */}
        {(loading && <Loading/> || <div className="products container">{products.map((product) => <ProductsCard key={product.id} data={product}/>)}</div> )}
        {/* <div className="products container">{products.map((product) => <ProductsCard key={product.id} data={product}/>)}</div> */}
        <Link className="link-to-home" to={"/"}>Para Home</Link>

    </div>
  )
}

export default Products


