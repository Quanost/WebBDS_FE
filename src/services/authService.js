import axios from 'axios'

const API_URL = "http://localhost:8000/api/auth/";

const register = (user) => {
    const name = user.firstName.concat(' ',user.lastName);
    return axios.post(API_URL + "signup", {
        name: name,
        phone: user.phone,
        gender: user.gender,
        username: user.username,
        email: user.email,
        password: user.password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};