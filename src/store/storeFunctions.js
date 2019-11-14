import employees, { signedInEmployee } from "../mockData/employees";
import initiatives from "../mockData/initiatives";
import axios from 'axios';

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

const setGitHubInfo = (githubData, employee) => {
    const employees = getEmployees();
    // console.log(employees);
    console.log('here');
    const index = employees.findIndex(user => user.name === employee.name);
    console.log('stupid', employees);
    console.log('indexed', employees[index]);
    employees[index].github.repositories = githubData.repositories;
    employees[index].github.githubUrl = githubData.githubUrl;
    employees[index].github.githubHandle = githubData.githubHandle;
    console.log('after stupid', employees[index]);
    setEmployees(employees);
};

const getGitHubInfo = (employee, gitHubUserName) => {
    if(employee.github.githubHandle !== null) {
        return new Promise(() => employee.github);
    } else {
        return axios
            .get(`https://api.github.com/users/${gitHubUserName}`)
    }
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
    setGitHubInfo,
    getGitHubInfo
};