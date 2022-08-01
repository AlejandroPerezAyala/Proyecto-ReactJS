import './App.css'
import 'flowbite'
import NavBar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer title="Productos" />
      <ItemDetailContainer id={5}/>
    </>
  )
}

export default App
