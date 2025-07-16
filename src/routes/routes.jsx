import { createBrowserRouter } from "react-router-dom";

// Componente de proteccion de rutas
import ProtectedRoute from "@/auth/ProtectedRoute";

// Rutas de la aplicacion
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Login from "@/auth/Login";
import Prices from "@/pages/Prices";
import Contact from "@/pages/Contact";
import { Navigate } from "react-router-dom";

// Crear el router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/prices",
        element: <Prices />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);

export default router;