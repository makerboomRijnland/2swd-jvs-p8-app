export class User {
    username;
    password;

    static async register(username, email, password) {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.status !== 200) {
            return null;
        }

        const data = await response.json();
        return new User(data.user);
    }

    static async login(username, password) {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.status !== 200) {
            return null;
        }

        const data = await response.json();
        return new User(data.user);
    }

    static async logout() {
        const response = await fetch("/api/logout", {
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
