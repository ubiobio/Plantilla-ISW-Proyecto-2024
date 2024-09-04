import { NavLink, useNavigate } from "react-router-dom";
import { logout } from '@services/auth.service.js';

const Navbar = () => {
    const navigate = useNavigate();

    const logoutSubmit = () => {
        try {
            logout();
            navigate('/auth'); 
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/home">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/auth" onClick={logoutSubmit}>Cerrar sesión</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;