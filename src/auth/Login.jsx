import Section from "@/components/ui/Section"
import LoginForm from "@/components/LoginForm"
import NavBar from "@/components/ui/NavBar"

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--blanco)]">
            {/* Barra de navegación */}
            {/* <NavBar /> */}

            {/* Contenido principal */}
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full mx-auto overflow-hidden md:rounded-xl shadow-2xl">
                    <div className="flex flex-col md:flex-row h-svh">
                        {/* Lado izquierdo - Diseño ondulado */}
                        <div className="w-full md:w-1/2 bg-gradient-to-br from-[var(--celeste-claro)] via-[var(--celeste)] to-[var(--azul-claro)] relative overflow-hidden p-8 flex flex-col justify-center items-center text-center">
                            {/* Contenido del lado izquierdo */}
                            <div className="relative z-10 max-w-md mx-auto text-[var(--blanco)]">
                                <div className="mb-8">
                                    <img
                                        src="/img/fluxor-logo.png"
                                        alt="Logo de C1"
                                        className="md:w-96 w-48 h-auto mx-auto md:mb-6"
                                    />
                                </div>
                                <h1 className="md:text-5xl text-3xl font-bold mb-4">¡Bienvenido!</h1>
                                <p className="text-xl opacity-90 mb-8">Inicia sesión para acceder a tu cuenta y utilizar tus automatizaciones.</p>
                            </div>
                        </div>

                        {/* Lado derecho - Formulario */}
                        <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
                            <div className="w-full max-w-md">
                                <h2 className="text-3xl font-bold text-[var(--azul-marino)] mb-2">Iniciar Sesión</h2>
                                <p className="text-gray-500 mb-8">Por favor ingresa tus credenciales para continuar</p>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login