// const host = 'https://spa-practise-server.onrender.com/data'; // This service uses authentication
const host = 'https://spa-practise-server.onrender.com/jsonstore';

export const getPets = async () => {
    const res = await fetch(host + '/animals');
    const data = await res.json();
    
    return Object.values(data);
}

export const getPetById = async (id) => {
    return (await fetch(host + `/animals/${id}`)).json();
}

export const createPet = async (petData) => {
    const req = await fetch(host + `/animals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
    });

    const res = await req.json();
    console.log(res);
    return res;
}

// for testing only!!!
window.api = {
    getPetById,
    getPets
}