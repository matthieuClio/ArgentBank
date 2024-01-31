export default async function getData (usernameUser: FormDataEntryValue | null, passwordUser: FormDataEntryValue | null) {

    const url = 'http://localhost:3001/api/v1/user'

    // Correct login
    // const loginInfo = {
    //     "email": "tony@stark.com",
    //     "password": "password123"
    // };

    // Login informations
    const loginInfo = {
        "email": usernameUser,
        "password": passwordUser
    };

    // User connection - Try to have a token
    const responseToken = await fetch(`${url}/login`, {
        method: 'POST', // Verb (http method)
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // Required* (for this request)
        body: JSON.stringify(loginInfo)
    });

    // Token data API returned
    const apiIdentification = await responseToken.json();
    let apiGetUserInfo = '';

    // Get user informations
    if (apiIdentification.status === 200) {
        const responseUserInfo = await fetch(`${url}/profile`, {
            method: 'POST', // Verb (http method)
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiIdentification.body.token}`
            }
        });

        apiGetUserInfo = await responseUserInfo.json();
    }

    const apiData = {
        token: apiIdentification,
        userInformations: apiGetUserInfo
    }

    return apiData;
    // return apiIdentification;
}