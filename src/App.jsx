import './App.css'
import NavBar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import ResponsiveMenu from './Components/ResponsiveMenu/ResponsiveMenu'
import CartProvider from './Components/Context/CartContext'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    
    <CartProvider>
      <BrowserRouter>
        <NavBar openMenu={toggleOpen}/>
        {isOpen && <ResponsiveMenu />}
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/productos' element={<ItemListContainer className='h-screen' title="Productos" />} />
          <Route path='/contacto' element={<h1 className=' text-white text-3xl'>Contactos</h1>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer />}/>
          <Route path='/category/:category' element={<ItemListContainer title="Productos" />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>  
      
      
    
  )
}

export default App
