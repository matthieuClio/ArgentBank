export default async function putData (token: string, userInformation: { 
    firstName: FormDataEntryValue | null,
    lastName: FormDataEntryValue | null
}) {
    const url = 'http://localhost:3001/api/v1/user/profile';

    const responseRequete = await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userInformation)
    });

    const apiRequete = await responseRequete.json();

    return apiRequete;
}