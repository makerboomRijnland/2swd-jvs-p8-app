export class User {
    username;
    password;

    static async register(username, email, password) {
        const response = await fetch("/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({register: { username, email, password }}),
        });

        if (response.status !== 200) {
            return null;
        }

        const data = await response.json();
        return new User(data.user);
    }

    static async login(username, password) {
        const response = await fetch("/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({login: { username, password }}),
        });

        if (response.status !== 200) {
            return null;
        }

        const data = await response.json();
        return new User(data.user);
    }

    static async logout() {
        const response = await fetch("/user/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status !== 200) {
            return false;
        }

        return true;
    }

    constructor(data = {}) {
        this.username = data.username;
        this.email = data.email;
    }
}
