export class Application {
    constructor() {

        document.addEventListener("DOMContentLoaded", () => { 
            this.updateHTML();
        })
        console.log('Application started');
    }

    updateHTML() {
        // Update links when user is not logged in
        document.querySelector("#main-header .login").style.display = "inline";
        document.querySelector("#main-header .logout").style.display = "none";
        document.querySelector("#main-header .register").style.display = "inline";
    }
}