// React
import { useState, useEffect } from 'react';

// React router
import { useNavigate } from 'react-router-dom';

// React redux
import { useSelector, useDispatch } from 'react-redux';

// Component
import Transaction from '../componant/Transaction';

// Style
import './user.scss';

// Scripts
import putData from '../scripts/putData';
import { updateInfoUser } from '../scripts/reduxToolkit/slice';

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
    // For call reducer
    const dispatch = useDispatch();

    // Store access
    const userInfo = useSelector((state: {
        user: { token: string, userFirstname: string, userName: string, connected: boolean } 
    }) => state.user);

    // Define a state variable
    const [edit, setEdit] = useState(false);

    // Open/close form (click event)
    function handleClick () {
        // Become true or false
        setEdit(!edit);
    }

    // Modify user informations (submit event)
    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        // Cancel the submition
        event.preventDefault();

        // Get form data
        const form = new FormData(event.target as HTMLFormElement);

        // Get user informations
        const firstnameData = form.get("firstname");
        const nameData = form.get("name");

        // Define an object with user informations
        const userInformation = {
            "firstName": firstnameData,
            "lastName": nameData
        }
        
        // Call async function for update the user informations
        putUserData(userInformation);
    }

    // Make API call for modify user informations
    async function putUserData (userInformation: {
        firstName: FormDataEntryValue | null,
        lastName: FormDataEntryValue | null
    }) {
        const apiData = await putData(userInfo.token, userInformation);
        console.log(apiData);

        // Update the store
        if (apiData.status === 200) {
            dispatch(updateInfoUser(apiData));
        }
    }

    // For make a redirection
    const navigate = useNavigate();

    // Make a redirection for a user who are not connected
    useEffect(() => {
        if (!userInfo.connected) {
            navigate('/login');
        }
    })

    return userInfo.connected && (
        <main className="user">
            <h1 className="user__main-title">
                Welcome back
            </h1>
            <span className={!edit ? 'user__main-title__text' : 'user-display-none'}>
                {userInfo.userFirstname} {userInfo.userName} !
            </span>

            <button onClick={handleClick} className="user__button-edit user-button-primary">
                Edit Name
            </button>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className={edit ? 'user__form' : 'user-display-none'}>
                <input type="text" name="firstname" placeholder={userInfo.userFirstname} className="user__form__firstname" />
                <input type="text" name="name" placeholder={userInfo.userName} className="user__form__name" />

                <button type="submit" className="user__form__button-update user-button-primary">
                    Save
                </button>
                <button onClick={handleClick} type="button" name="cancel" className="user__form__button-cancel user-button-primary">
                    Cancel
                </button>
            </form>

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