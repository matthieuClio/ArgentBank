// React
import { useEffect } from 'react';

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Component
import Transaction from '../componant/Transaction';

// Style
import './user.scss';

export default function User () {

    // For make a redirection
    const navigate = useNavigate()

    // Store access
    const userInfo = useSelector((state: {
        user: { connected: boolean, userFirstname: string, userName: string } 
    }) => state.user);

    // Make a redirection for a user who are not connected
    useEffect(() => {
        if (!userInfo.connected) {
            navigate('login');
        }
    })

    return userInfo.connected && (
        <main className="user">
            <h1 className="user__main-title">
                Welcome back
                <span className="user__main-title__text">{userInfo.userFirstname} {userInfo.userName}</span>
            </h1>

            <button className="user__button">
                Edit Name
            </button>

            {/* Transaction component */}
            <Transaction />
        </main>
    )
}