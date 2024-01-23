// Style
import './connection.scss'

export default function Connection () {
    return (
        <main className="connection">
            <form className="connection__form">
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
                <input type="text" id="password" className="connection-input-text" />

                {/* Checkbox */}
                <div className="connection__form__input-container">
                    <input type="checkbox" id="remember-me" className="connection__form__input-container__input-checkbox" />
                    <label htmlFor="remember-me">
                        Remember me
                    </label>
                </div>

                <button type="submit" className="connection__form__submit-button">
                    <span>Sign In</span>
                </button>
            </form>
        </main>
    )
}