export default async function getData (usernameUser: FormDataEntryValue | null, passwordUser: FormDataEntryValue | null) {

    // Define an url
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

    // Will have fetch response token
    let responseToken;

    // Try to make a fetch
    try {
        // User connection - Try to have a token
        responseToken = await fetch(`${url}/login`, {
            method: 'POST', // Verb (http method)
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // Required* (for this request)
            body: JSON.stringify(loginInfo)
        });
    } catch (error) {
        console.log(error);
    }

    // Token data API returned
    const apiIdentification = responseToken ? await responseToken.json() : { status: 500};

    // Will have user informations
    let apiGetUserInfo;

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

        // Stock user informations
        apiGetUserInfo = await responseUserInfo.json();
    }

    // Create an object contain API data
    const apiData = {
        token: apiIdentification,
        userInformations: apiGetUserInfo
    }

    return apiData;
}