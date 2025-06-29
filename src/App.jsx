
import './App.css'
import {Outlet} from 'react-router-dom'
//import NavBar from './components/NavBar'
import Provider from './context/Provider'
import Cart from './components/Cart'
import Header from './components/Header'
function App() {
  

  return (
    <div>
      <Provider>
        <Header/>
        <Outlet/>
        <Cart/>
      </Provider>
    </div>
  )
}

export default App
