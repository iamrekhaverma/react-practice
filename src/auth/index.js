import services from "services";

export const signup = (name, email, password) => {
    return services.postRequest("/auth/register", {name, email, password})
        .then(
        (res) => {
            console.log("res",res)
        }
    );
};

export const signin = (email, password) => {
    return services.postRequest("/auth/login")
        .then(
        (res) => {
            console.log("res",res)
        }
    );
};
export const authenticate = (data, next) => {
    if(typeof window!== "undefined") {
        localStorage.setItem("jwt", data);
        next();
    }
};
export const signout = (next) => {
    if(typeof window!== "undefined") {
        localStorage.removeItem("jwt");
        next();
        // Request to backend that user is logged out
    }
};
export const isAuthenticated = (next) => {
    if(typeof window === "undefined") {
        return false;
    }
    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false;
    }
    
};