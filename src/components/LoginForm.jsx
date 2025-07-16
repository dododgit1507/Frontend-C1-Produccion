import { useForm } from "react-hook-form"
import * as z from "zod";
// Componentes de UI
import FormGroup from "./ui/FormGroup";

// Contexto de autenticación
import useLogin from "@/hooks/useLogin";
import { toast } from "sonner";

const LoginForm = () => {

    const { Login } = useLogin();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({

    })

    const UserSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    })

    const onSubmit = async (data) => {
        try {
            await Login(data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <label htmlFor="correo">Correo</label>
                <input type="email" autoComplete="on" id="correo" placeholder="Ej: correo@correo.com" {...register("email", { required: true })} />
                {errors.email && <p className="text-red-500">El correo es requerido</p>}
            </FormGroup>
            <FormGroup>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="Ej: ********" {...register("password", { required: true })} />
                {errors.password && <p className="text-red-500">La contraseña es requerida</p>}
            </FormGroup>
            <button type="submit" disabled={isSubmitting}>Iniciar Sesión</button>
        </form>
    )
}

export default LoginForm