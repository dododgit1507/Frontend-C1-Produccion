
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {

    const navigate = useNavigate();
    const { login, logout } = useAuth();

    const Login = async (credentials) => {
        try {
            const success = await login(credentials)
            if (success) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const Logout = () => {
        try {
            logout()
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return {
        Login,
        Logout
    }
}

export default useLogin