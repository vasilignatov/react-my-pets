export const login = async (email, password) => {
    let res = await fetch('http://localhost:3030/users/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    const result = await res.json();

    if (res.ok) {
        return result;
    }

    throw result.message;

}

export const getUser = () => {
    let username = localStorage.getItem('email');

    return username;
}

export const isAuth = () => {
    return Boolean(getUser());
}

export const logout = () => {
    localStorage.removeItem('email');
    // localStorage.removeItem('password');
}