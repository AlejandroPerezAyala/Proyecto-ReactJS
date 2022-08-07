import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/NavBar.css'

const ResponsiveMenu = () => {
  return (
    <div className="text-center block sm:hidden text-xl bg-black items-center">
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
  )
}

export default ResponsiveMenu