export const login = (email) => {
    localStorage.setItem('email', email);
    // localStorage.setItem('password', password);
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