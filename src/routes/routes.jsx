import { createBrowserRouter, Outlet } from "react-router-dom";

// Componente de proteccion de rutas
import ProtectedRoute from "@/auth/ProtectedRoute";

// Componente para desplazar al inicio en cada cambio de ruta
import ScrollToTop from "@/components/ui/ScrollToTop";

// Rutas de la aplicacion
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Login from "@/auth/Login";
import Prices from "@/pages/Prices";
import Contact from "@/pages/Contact";
import { Navigate } from "react-router-dom";

// Layout principal que incluye ScrollToTop
// Cumple la funcionalidad de scrolear automaticamente hacia arriba cuando viajas a una nueva pagina
const AppLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
};

// Crear el router
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "prices",
                element: <Prices />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                )
            },
            {
                path: "*",
                element: <Navigate to="/" />
            }
        ]
    }
]);

export default router;