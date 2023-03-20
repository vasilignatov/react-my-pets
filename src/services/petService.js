const host = 'https://spa-practise-server.onrender.com/data/';
export const getPets = async () => {
    const res = await fetch(host + '/animals');
    const data = await res.json();
    
    return Object.values(data);
}

export const getPetById = async (id) => {
    return (await fetch(host + `/animals/${id}`)).json();
}

export const createPet = async (pet) => {
    return await fetch(host + `/animals/${pet._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
}



window.api = {
    getPetById,
    getPets
}