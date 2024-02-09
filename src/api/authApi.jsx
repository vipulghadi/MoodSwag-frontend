const BASE_URL = "http://localhost:8000/api";



export const Authentication = {
    userRegister: async function(credits) {
        console.log(credits);
        try {
            const respone = await fetch(BASE_URL + "/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credits),
            });
            return respone;
        } catch (e) {
            return e;
        }
    },
    userLogin: async function(credits) {
        try {
            const respone = await fetch(BASE_URL + "/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credits),
            });
            return respone;
        } catch (e) {
            return e;
        }

    },
    userVerifyOtp: async function(credits) {
        console.log(credits);
        try {
            const respone = await fetch(BASE_URL + "/otp-verification/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credits),
            });
            return respone;
        } catch (e) {
            return e;
        }

    },

    userLogout: async function() {

    },

}