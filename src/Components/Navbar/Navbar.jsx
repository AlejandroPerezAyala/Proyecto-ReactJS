import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="bg-black block text-xl sm:flex sm:justify-between">
            <div>
                <Link to='/' className="flex justify-center sm:justify-start sm:ml-5 object-cover">
                    <img src="/src/Components/Navbar/img/MelisaShoes-logo (1).png" alt="" className="w-2/5"/>
                </Link>
            </div>
            <div className="text-center hidden sm:flex items-center">
                <ul className="text-white sm:flex sm:justify-evenly mr-3 submenu">
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="m-3 hover:cursor-pointer">
                        <Link to='/productos' className="hover:font-bold">Productos</Link>
                        <ul className="bg-black rounded-b-md">
                            <li className="m-3 bg-black p-2 hover:rounded-sm hover:cursor-pointer hover:bg-gray-600"><Link to='/category/zapatos'>Zapatos</Link></li>
                            <li className="m-3 bg-black p-2 hover:rounded-sm hover:cursor-pointer hover:bg-gray-600"><Link to='/category/zapatillas'>Zapatillas</Link></li>
                            <li className="m-3 bg-black p-2 hover:rounded-sm hover:cursor-pointer hover:bg-gray-600"><Link to='/category/borcegos'>Borcegos</Link></li>    
                        </ul>
                    </li>
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <Link to='/contacto'>Contactanos</Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <button className="text-white mr-5"><CartWidget/></button>
            </div>
        </nav>
    )
}

export default NavBar

