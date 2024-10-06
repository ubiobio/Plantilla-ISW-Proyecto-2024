import { useAuth } from '@context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, user } = useAuth();
    
    if (!isAuthenticated) {
        return <Navigate to="/auth" />;
    }

    if (allowedRoles && !allowedRoles.includes(user?.rol)) {
        return <Navigate to="/home" />;
    }

    return children;
};

export default ProtectedRoute;
