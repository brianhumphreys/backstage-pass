import employees, { signedInEmployee } from "../mockData/employees";
import initiatives from "../mockData/initiatives";

const cache = (key, setter, data) => {
    const stringData = localStorage.getItem(key);
    if(stringData) {
        return JSON.parse(stringData);
    } else {
        setter(data);
        return data;
    }
}

const setSignedInUser = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
};

const getSignedInUser = () => {
    return cache("loggedInUser", setSignedInUser, signedInEmployee);
};

const setEmployees = (employees) => {
    localStorage.setItem("employees", JSON.stringify(employees));
};

const getEmployees = () => {
    return cache("employees", setEmployees, employees);
};

const setInitiatives = (initiatives) => {
    localStorage.setItem("initiatives", JSON.stringify(initiatives));
};

const getInitiatives = () => {
    return cache("initiatives", setInitiatives, initiatives);
};

const setNotifications = (notifications) => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
};

const getNotifications = () => {
    return cache("notifications", setNotifications, []);
};

export {
    setSignedInUser,
    getSignedInUser,
    setEmployees,
    getEmployees,
    setInitiatives,
    getInitiatives,
    setNotifications,
    getNotifications,
};