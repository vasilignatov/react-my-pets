const host = 'http://localhost:3030/users'

export const login = async (email, password) => {
    let res = await fetch(host + '/login', {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({ email, password })
    })
    const result = await res.json();

    if (res.ok) {
        return result;
    }

    throw result.message;
}

export const register = async (email, password) => {
    let res = await fetch(host + '/register', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    })

    const result = await res.json();

    if (res.ok) {
        return result;
    }

    throw result.message;

}

export const getUser = () => {
    // let username = localStorage.getItem('email');

    // return username;
}

export const isAuth = () => {
    // return Boolean(getUser());
}

export const logout = () => fetch(host + '/logout');