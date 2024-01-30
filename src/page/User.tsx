// Component
import Transaction from '../componant/Transaction';

// Style
import './user.scss';

export default function User () {
    return (
        <main className="user">
            <h1 className="user__main-title">
                Welcome back
                <span className="user__main-title__text">Tony Jarvis!</span>
            </h1>

            <button className="user__button">
                Edit Name
            </button>

            {/* Transaction component */}
            <Transaction />
        </main>
    )
}