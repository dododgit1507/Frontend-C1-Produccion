import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-transparent backdrop-blur-sm bg-opacity-20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl md:text-3xl text-[var(--blanco)] font-bold hover:text-[var(--celeste-claro)] transition-all duration-300">
                            Fluxor
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-[var(--blanco)] hover:text-[var(--celeste-claro)] px-3 py-2 rounded-md text-sm md:text-lg font-medium transition-all duration-300">Inicio</Link>
                        <Link to="/prices" className="text-[var(--blanco)] hover:text-[var(--celeste-claro)] px-3 py-2 rounded-md text-sm md:text-lg font-medium transition-all duration-300">Precios</Link>
                        <Link to="/contact" className="text-[var(--blanco)] hover:text-[var(--celeste-claro)] px-3 py-2 rounded-md text-sm md:text-lg font-medium transition-all duration-300">Contacto</Link>
                    </nav>

                    {/* Login Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm md:text-lg font-medium rounded-md text-[var(--azul-marino)] bg-[var(--celeste-claro)] hover:bg-[var(--blanco)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--celeste)] transition-all duration-300"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--blanco)] hover:text-[var(--celeste-claro)] hover:bg-[var(--azul-oscuro)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[var(--blanco)] hover:text-[var(--celeste-claro)] hover:bg-[var(--azul-marino)] transition-all duration-300"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/prices"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[var(--blanco)] hover:text-[var(--celeste-claro)] hover:bg-[var(--azul-marino)] transition-all duration-300"
                    >
                        Precios
                    </Link>
                    <Link
                        to="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[var(--blanco)] hover:text-[var(--celeste-claro)] hover:bg-[var(--azul-marino)] transition-all duration-300"
                    >
                        Contacto
                    </Link>
                    <Link
                        to="/login"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[var(--celeste-claro)] hover:text-[var(--blanco)] hover:bg-[var(--azul-marino)] transition-all duration-300"
                    >
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar