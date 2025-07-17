import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// Componentes de UI
import FormGroup from "./ui/FormGroup";
import { Lock, Mail, LoaderCircle } from "lucide-react";

// Contexto de autenticación
import useLogin from "@/hooks/useLogin";
import { toast } from "sonner";

// Esquema de validación con Zod
const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "El correo electrónico es requerido" })
        .email({ message: "Formato de correo electrónico inválido" }),
    password: z
        .string()
        .min(1, { message: "La contraseña es requerida" })
        .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
});

const LoginForm = () => {
    const { Login } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data) => {
        try {
            await Login(data);
            reset(); // Limpiar el formulario después de un inicio de sesión exitoso
        } catch (error) {
            toast.error(error.message || "Error al iniciar sesión");
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Correo Electrónico
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="correo@ejemplo.com"
                        className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--celeste)] focus:border-[var(--celeste)] sm:text-sm`}
                        {...register("email")}
                    />
                </div>
                {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
            </FormGroup>

            <FormGroup>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Contraseña
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="********"
                        className={`block w-full pl-10 pr-3 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[var(--celeste)] focus:border-[var(--celeste)] sm:text-sm`}
                        {...register("password")}
                    />
                </div>
                {errors.password && (
                    <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                )}
            </FormGroup>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-[var(--celeste)] focus:ring-[var(--celeste-claro)] border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Recordarme
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-[var(--celeste)] hover:text-[var(--celeste-claro)]">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-[var(--celeste)] hover:bg-[var(--azul-claro)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--celeste)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    {isSubmitting ? (
                        <>
                            <LoaderCircle className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                            Procesando...
                        </>
                    ) : (
                        "Iniciar Sesión"
                    )}
                </button>
            </div>

            <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                    ¿No tienes una cuenta?{" "}
                    <a href="#" className="font-medium text-[var(--celeste)] hover:text-[var(--celeste-claro)] transition-colors duration-200">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </form>
    );
}

export default LoginForm