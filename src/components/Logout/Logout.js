import { Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const { user, onLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                onLogout()
            })
    })
    logout();
    onLogout();

    return null;
}

export default Logout;