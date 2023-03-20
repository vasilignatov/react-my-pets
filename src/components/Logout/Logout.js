import { Navigate } from 'react-router-dom';
import { logout } from '../../services/authService';

const Logout = ({
    onLogout
}) => {
    logout();
    onLogout();

    return <Navigate to='/login' replace={true} />
}

export default Logout;