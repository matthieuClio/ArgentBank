export default async function putData (token: string, userInformation: { 
    firstName: FormDataEntryValue | null,
    lastName: FormDataEntryValue | null
}) {
    // Will have fetch response (update)
    let responseRequete;

    try {
        // Define an url
        const url = 'http://localhost:3001/api/v1/user/profile';

        // User profile update - Try to make an update
        responseRequete = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userInformation)
        });

    } catch (err) {
        console.log(err);
    }

    // Update response returned or error 500
    const apiRequete = responseRequete ? await responseRequete.json() : { status: 500 };

    return apiRequete;
}