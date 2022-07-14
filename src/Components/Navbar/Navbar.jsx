const NavBar = () => {
    return (
        <nav className="bg-black block text-xl top-0 sticky sm:flex sm:justify-between">
            <div>
                <a href="" className="flex justify-center sm:justify-start sm:ml-5">
                    <img src="/src/Components/Navbar/img/MelisaShoes-logo (1).png" alt="" className="w-2/5"/>
                </a>
            </div>
            <div className="text-center hidden sm:flex items-center">
                <ul className="text-white sm:flex sm:justify-evenly">
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <a href="">Home</a>
                    </li>
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <a href="">Productos</a>
                    </li>
                    <li className="m-3 hover:cursor-pointer hover:font-bold">
                        <a href="">Contactanos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar