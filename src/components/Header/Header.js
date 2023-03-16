

const Header = () => {
    return (
        <header id="site-header">
            {/* <!-- Navigation --> */}
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="#">Dashboard</a>
                    {/* <!-- Guest users --> */}
                    <div id="guest">
                        <a class="button" href="#">Login</a>
                        <a class="button" href="#">Register</a>
                    </div>
                    {/* <!-- Logged-in users --> */}
                    <div id="user">
                        <span>Welcome, email</span>
                        <a class="button" href="#">My Pets</a>
                        <a class="button" href="#">Add Pet</a>
                        <a class="button" href="#">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Header;