export default async function getData (usernameUser: FormDataEntryValue | null, passwordUser: FormDataEntryValue | null) {

    // Login informations
    const loginInfo = {
        "email": usernameUser,
        "password": passwordUser
    };

    // const loginInfo = {
    //     "email": "tony@stark.com",
    //     "password": "password123"
    // };

    // User connection (Api request)
    const responseUser = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST', // Verb (http method)
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // Required* (for this request)
        body: JSON.stringify(loginInfo)
    });

    // Token data API returned
    const apiUser = await responseUser.json();
    return apiUser;
}