import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = ({openMenu}) => {
    return (
        <nav className="bg-black text-xl flex justify-between">
            <div>
                <Link to='/' className="flex justify-start sm:ml-5 object-cover">
                    <img src="/MelisaShoes-logo.png" alt="" className="w-2/5"/>
                </Link>
            </div>
            <button className="sm:hidden" onClick={openMenu}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg></button>
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
                <Link to="/cart"><button className="text-white mr-5"><CartWidget/></button></Link>   
            </div>
        </nav>
    )
}

export default NavBar

