import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    // Mostrar indicador de carga mientras se verifica la autenticación
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Verificar autenticación
    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // Renderizar los componentes hijos si está autorizado
    return children;
};

export default ProtectedRoute;