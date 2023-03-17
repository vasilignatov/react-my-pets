import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService.js';

const Login = ({
    onLogin
}) => {
    
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get('email');
        // let password = formData.get('password');

        login(email);
        onLogin(email);
        navigate('/');
    }


    return (
        <section id="login-page" class="login">
            <form id="login-form" onSubmit={onLoginHandler} method='POST'>
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    )
}

export default Login;