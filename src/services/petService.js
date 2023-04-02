// const host = 'https://spa-practise-server.onrender.com/data'; // This service uses authentication
// const host = 'https://spa-practise-server.onrender.com/jsonstore';
const host = 'http://localhost:3030/data';

export const getPets = async () => {
    const res = await fetch(host + '/pets');
    const data = await res.json();

    return Object.values(data);
}

export const getPetById = async (id) => {
    return (await fetch(host + `/pets/${id}`)).json();
}

export const createPet = async (petData, token) => {
    const req = await fetch(host + `/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...petData, likes: [] })
    });

    const res = await req.json();
    return res;
}

export const deletePet = async (petId, token) => {
    const req = await fetch(host + `/pets`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });

    const res = await req.json();
    return res;
}



export const getTypes = async () => {
    const res = await fetch(host + '/types');
    const data = await res.json();

    return Object.values(data);
}

// for testing only!!!
window.api = {
    getPetById,
    getPets,
    createPet,
    getTypes
}