const loginData = {

    validUser: {
        username: "Admin",
        password: "admin123"
    },

    invalidPassword: {
        username: "Admin",
        password: "wrongPassword"
    },

    invalidUsername: {
        username: "WrongUser",
        password: "admin123"
    },

    emptyUsername: {
        username: "",
        password: "admin123"
    },

    emptyPassword: {
        username: "Admin",
        password: ""
    },

    emptyCredentials: {
        username: "",
        password: ""
    }

};

export default loginData;