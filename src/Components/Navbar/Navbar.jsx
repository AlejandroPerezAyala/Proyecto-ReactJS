import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="bg-black block text-xl sm:flex sm:justify-between top-0 sticky">
            <div>
                <a href="" className="flex justify-center sm:justify-start sm:ml-5 object-cover">
                    <img src="/src/Components/Navbar/img/MelisaShoes-logo (1).png" alt="" className="w-2/5"/>
                </a>
            </div>
            <div className="text-center hidden sm:flex items-center">
                <ul className="text-white sm:flex sm:justify-evenly mr-3">
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <a href="">Home</a>
                    </li>
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <a href="">Productos</a>
                    </li>
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <a href="">Contactanos</a>
                    </li>
                    <li className="m-3 hover:cursor-pointer">
                        <CartWidget/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

