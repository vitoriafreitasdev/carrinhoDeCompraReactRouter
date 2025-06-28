import { useState } from "react";
import AppContext from "./AppContext";

const Provider = ({children}) => {
    const  [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartVisible, setCartVisible] = useState(false)
    const [loading, setLoanding] = useState(true)
    const value = {
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartVisible, 
        setCartVisible,
        loading, setLoanding
    }
    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    )
}

export default Provider;