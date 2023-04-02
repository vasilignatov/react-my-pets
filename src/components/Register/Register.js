import { register, login } from '../../services/authService.js';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { onLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        register(email, password)
            .then(res => {
                onLogin(email, password)
                navigate('/dashboard');
            })
            .catch(console.error);

    }


    return (
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p className="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="rePass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    )
}

export default Register;