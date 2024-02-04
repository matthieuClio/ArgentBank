// React 
import { useState } from 'react';

// React router
import { useNavigate } from 'react-router-dom';

// React redux
import { useDispatch } from 'react-redux';

// Style
import './connection.scss';

// Scripts
import getData from '../scripts/getData';
// Scripts - Redux Toolkit
import { update } from '../scripts/reduxToolkit/slice';

export default function Connection () {
    // Error login  
    const [errorLogin, setErrorLogin] = useState(false);
    // Error message 
    const [errorMessage, setErrorMessage] = useState('');
    // User login informations
    const [loginUser] = useState(JSON.parse(localStorage.getItem('login') as string));

    // For make a dispatch
    const userDispatch = useDispatch();

    // For make redirection
    const navigate = useNavigate();

    // Get user store information
    // const userStore = useSelector((state: { user: object }) => state.user);
    // console.log(userStore);

    // HandleSubmit function
    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        // Cancel the submition
        event.preventDefault();
    
        // Get data form
        const form = new FormData(event.target as HTMLFormElement);
        const usernameUser = form.get("username");
        const passwordUser = form.get("password");
        const rememberMe = form.get("remember-me");

        // Call async function
        fetchUserData(usernameUser, passwordUser, rememberMe);
    }

    // Make API calls - get token
    async function fetchUserData (
        usernameUser: FormDataEntryValue | null, 
        passwordUser: FormDataEntryValue | null,
        rememberMe: FormDataEntryValue | null,
    ) {
        // Make an API call for connect the user
        const apiData = await getData(usernameUser, passwordUser);
        console.log(apiData);

        // Check the response status
        switch (apiData.token.status) {
            // User is connected
            case 200:
                // Update the store to giving API data
                userDispatch(update(apiData));

                // If Remember checked, remember user login informations
                if (rememberMe != null) {
                    // Define informations to stock in localStorage
                    localStorage.setItem('login', JSON.stringify({username: usernameUser, password: passwordUser}));
                } else {
                    // Remove login storage informations
                    localStorage.removeItem('login');
                }

                // Redirect the user
                navigate('/user');
                break;

            // Specific error message for status 400
            case 400: 
                // Define error message
                setErrorMessage("Erreur : vérifier l'identifiant et le mot de passe.");
                // Display error message
                setErrorLogin(true);
                break;

            // Specific error message for other status
            default:
                // Define error message
                setErrorMessage("Erreur : problème de server.");
                // Display error message
                setErrorLogin(true);
                break;
        }
    }

    return (
        <main className="connection">
            <form onSubmit={handleSubmit} className="connection__form">
                {/* Icon */}
                <span className="fa fa-user-circle connection__form__icon"></span>

                {/* Title */}
                <h1 className="connection__form__title">
                    Sign In
                </h1>

                {/* Username */}
                <label htmlFor="username" className="connection-label">
                    Username
                </label>
                <input type="text" name="username" id="username" placeholder="tony@stark.com" defaultValue={loginUser && loginUser.username} required className="connection-input-text connection__form__input-username" />

                {/* Password */}
                <label htmlFor="password" className="connection-label">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="password123" defaultValue={loginUser && loginUser.password} required className="connection-input-text" />

                {/* Checkbox */}
                <div className="connection__form__input-container">
                    <input type="checkbox" name="remember-me" id="remember-me" className="connection__form__input-container__input-checkbox" />
                    <label htmlFor="remember-me">
                        Remember me
                    </label>
                </div>

                {/* Submit button */}
                <button type="submit" className="connection__form__submit-button">
                    <span className="connection__form__submit-button__text">
                        Sign In
                    </span>
                </button>

                <div className={errorLogin ? 'connection__form__error' : 'connexion-display-none'}>
                    {errorMessage} 
                </div>
            </form>
        </main>
    )
}