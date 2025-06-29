import { Link } from "react-router-dom"
import AppContext from "../context/AppContext"
import React from 'react'
import { useFetch } from "../api/useFetch"
import "./Home.css"
const Home = () => {
  const url = "https://dummyjson.com/products"

  const {data: items} = useFetch(url)
  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setProducts(data.products)
  //   }

  //   getData()
  // }, [])
  
   
  return (
    <div className="home">
        <h1 className="home-h1">Loja de itens diversos como: </h1>
        <div className="home-title-div">{items && items.map((product) => (
          <div key={product.id} className="home-products-div"> 
            <p>{product.title}</p>
          </div>
        ))}</div>
        
        <p ><Link to={`/products`} className="link-to-products">Ir para produtos</Link></p>
    </div>
  )
}

export default Home