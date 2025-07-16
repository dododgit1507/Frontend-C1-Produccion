import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex justify-between py-4">
            <Link to="/" className="text-xl text-white font-bold hover:underline transition-all duration-300">C1 - Produccion</Link>
            <nav className="flex justify-between gap-4 max-w-7xl mx-auto">
                <Link to="/" className="text-xl text-white font-bold hover:underline transition-all duration-300">Inicio</Link>
                <Link to="/prices" className="text-xl text-white font-bold hover:underline transition-all duration-300">Precios</Link>
                <Link to="/contact" className="text-xl text-white font-bold hover:underline transition-all duration-300">Contacto</Link>
            </nav>
            <Link to="/login" className="text-xl text-white font-bold hover:underline transition-all duration-300">Login</Link>
        </div>
    )
}

export default NavBar