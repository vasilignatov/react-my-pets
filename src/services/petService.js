const host = 'http://localhost:3030/jsonstore';

export const getPets = async () => {
    return (await fetch(host + '/my-pets')).json();
}

export const getPetById = async (id) => {
    return (await fetch(host + `/my-pets/${id}`)).json();
}

