import { Link } from 'react-router-dom';

const Header = ({
    isAuth,
    user
}) => {
    
    const guestNavigation = (
        <div id="guest">
            <Link class="button" to="/login">Login</Link>
            <Link class="button" to="/register">Register</Link>
        </div>)

    const userNavigation = (
        <div id="user">
            <span>Welcome, {user}</span>
            <Link class="button" to="/my-pets">My Pets</Link>
            <Link class="button" to="/create">Add Pet</Link>
            <Link class="button" to="/logout">Logout</Link>
        </div>)

    return (
        <header id="site-header">
            {/* <!-- Navigation --> */}
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    {
                        isAuth
                            ? guestNavigation
                            : userNavigation
                    }
                </section>
            </nav>
        </header>
    )
}

export default Header;