// React router
import { useNavigate } from 'react-router-dom';

// Style
import './connection.scss';

// Scripts
import getData from '../script/getData';

export default function Connection () {

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

        // Get token
        async function fetchUserData (usernameUser: FormDataEntryValue | null, passwordUser: FormDataEntryValue | null) {
            // Make an API call for connect the user
            const apiDataToken = await getData(usernameUser, passwordUser);
            console.log(apiDataToken);

            // Check the response status
            switch (apiDataToken.status) {
                // Redirect user
                case 200: navigate('/user');
                break;
                // Display error message
                case 400: console.log('Error login');
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
                <input type="text" name="username" id="username" required className="connection-input-text connection__form__input-username" />

                {/* Password */}
                <label htmlFor="password" className="connection-label">
                    Password
                </label>
                <input type="password" name="password" id="password" required className="connection-input-text" />

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