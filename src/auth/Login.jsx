import Section from "@/components/ui/Section"
import LoginForm from "@/components/LoginForm"

const Login = () => {
    return (
        <Section className="bg-[var(--blanco)]">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1/2">
                    <h1>Imagen de C1 Ira aqui</h1>
                </div>
                <div className="flex-1/2">
                    <h1>Formulario de Registro o Inicio de Sesion</h1>
                    <LoginForm />
                </div>
            </div>
        </Section>
    )
}

export default Login