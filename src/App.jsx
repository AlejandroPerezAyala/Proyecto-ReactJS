import './App.css'
import 'flowbite'
import NavBar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer title="Proximamente catalogo de productos" />
    </>
  )
}

export default App
