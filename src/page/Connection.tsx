// Style
import './connection.scss';

export default function Connection () {
    return (
        <main className="connection">
            {/* Faire un onsubmit="handleSubmit" via JS, pas de méthode à mettre, enlever method, action */}
            <form method="get" action="user" className="connection__form">
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
                <input type="text" id="username" className="connection-input-text connection__form__input-username" />

                {/* Password */}
                <label htmlFor="password" className="connection-label">
                    Password
                </label>
                <input type="password" id="password" className="connection-input-text" />

                {/* Checkbox */}
                <div className="connection__form__input-container">
                    <input type="checkbox" id="remember-me" className="connection__form__input-container__input-checkbox" />
                    <label htmlFor="remember-me">
                        Remember me
                    </label>
                </div>

                <button type="submit" className="connection__form__submit-button">
                    <span className="connection__form__submit-button__text">Sign In</span>
                </button>
            </form>
        </main>
    )
}