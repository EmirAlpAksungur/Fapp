import Cookies from "js-cookie";

export const setToken = (newToken) => {
    Cookies.set("token", newToken);
    window.dispatchEvent(new Event("tokenChanged"));
};

export const deleteToken = () => {
    Cookies.remove("token");
    window.dispatchEvent(new Event("tokenChanged"));
};