// React
import { useEffect } from 'react';

// React router
import { useNavigate } from 'react-router-dom';

// React redux
import { useSelector } from 'react-redux';

// Component
import Transaction from '../componant/Transaction';

// Style
import './user.scss';

// For Transaction component
const transactionInfo = {

    checking: {
        operationText: 'Argent Bank Checking (x8349)',
        amountText: '$2,082.79',
        balanceText: 'Available Balance'
    },
    saving: {
        operationText: 'Argent Bank Savings (x6712)',
        amountText: '$10,928.42',
        balanceText: 'Available Balance'
    },
    creditCard: {
        operationText: 'Argent Bank Credit Card (x8349)',
        amountText: '$184.30',
        balanceText: 'Current Balance'
    }
}

export default function User () {

    // For make a redirection
    const navigate = useNavigate();

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
            <Transaction 
                informationsText={transactionInfo.checking}
            />
            <Transaction 
                informationsText={transactionInfo.saving}
            />
            <Transaction 
                informationsText={transactionInfo.creditCard}
            />
        </main>
    )
}