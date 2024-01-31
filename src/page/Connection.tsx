// React router
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Style
import './connection.scss';

// Scripts
import getData from '../scripts/getData';
// Scripts - Redux Toolkit
import { update } from '../scripts/reduxToolkit/slice';

export default function Connection () {

    // For use reducer
    const userDispatch = useDispatch()

    // Get user store information
    const userStore = useSelector((state: { user: object }) => state.user);
    console.log(userStore);

    // For make redirection
    const navigate = useNavigate();

    // HandleSubmit function
    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        // Cancel the submition
        event.preventDefault();
    
        // Get data form
        const form = new FormData(event.target as HTMLFormElement);
        const usernameUser = form.get("username");
        const passwordUser = form.get("password");

        // Make API calls - get token
        async function fetchUserData (usernameUser: FormDataEntryValue | null, passwordUser: FormDataEntryValue | null) {
            // Make an API call for connect the user
            const apiData = await getData(usernameUser, passwordUser);
            console.log(apiData);

            // Check the response status
            switch (apiData.token.status) {
                // Redirect user
                case 200:
                    // Update the store in giving API data
                    userDispatch(update(apiData));

                    // Redirect the user
                    navigate('/user');
                    break;

                // Display error message
                case 400: 
                    console.log('Error login');
                    break;

                default:
                    console.log('Not status 200 or 400');
                    break;
            }
        }
        fetchUserData(usernameUser, passwordUser);
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
                <input type="text" name="username" id="username" placeholder="tony@stark.com" defaultValue="tony@stark.com" required className="connection-input-text connection__form__input-username" />

                {/* Password */}
                <label htmlFor="password" className="connection-label">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="password123" defaultValue="password123" required className="connection-input-text" />

                {/* Checkbox */}
                <div className="connection__form__input-container">
                    <input type="checkbox" id="remember-me" className="connection__form__input-container__input-checkbox" />
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
            </form>
        </main>
    )
}