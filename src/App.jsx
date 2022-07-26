import './App.css'
import 'flowbite'
import NavBar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer title="Productos" />
    </>
  )
}

export default App
