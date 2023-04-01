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
        let password = formData.get('password');

        login(email, password)
            .then((authData) => {
                console.log('logged in');
                console.log(authData);
            })
            .catch(err => {
                console.log(err);
            })

        onLogin(email);
        navigate('/');
    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler} method='POST'>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label for="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label for="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    )
}

export default Login;