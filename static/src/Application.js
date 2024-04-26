import "/src/User.js";


export class Application {
    //Properties
    user;


    constructor() {
        const userData = localStorage.getItem("user");
        if (userData) {
            this.user = new User(JSON.parse(userData).email);
        } else {
            this.user = null;
        }


        document.addEventListener("DOMContentLoaded", () => {
            this.updateDOM();
            this.initEvents();
        });
    }


    initEvents() {
        // Login dialog
        const loginDialog = document.querySelector("#login-dialog");
        document.querySelector(".login").addEventListener("click", () => {
            loginDialog.showModal();
        });
        loginDialog.querySelector(".closeDialog").addEventListener("click", (e) => {
            loginDialog.close();
            e.preventDefault();
        });
        loginDialog.querySelector("form").addEventListener("submit", () => {
            this.login(loginDialog.querySelector("input#login-email").value, loginDialog.querySelector("input#login-password").value);
        });

        // Logout
        document.querySelector(".logout").addEventListener("click", (e) => {
            this.logout();
        });
        
    }

    login(email, password) {
        this.user = new User(email);
        localStorage.setItem("user", JSON.stringify({email: email}));
        this.updateDOM();
    }

    logout() {
        this.user = null;
        localStorage.removeItem("user");
        this.updateDOM();
    }


    updateDOM () {
        if (!this.user) {   
            document.querySelector(".logout").classList.add("hiden");
            document.querySelector(".profile").classList.add("hiden");
        } else {
            document.querySelector(".logout").classList.remove("hiden");
            document.querySelector(".profile").classList.remove("hiden");
        }
        document.querySelector("header#main-header > nav").classList.remove("opacity-0");
    }

}