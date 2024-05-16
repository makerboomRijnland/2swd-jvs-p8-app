import { Router } from "express";
import { User } from "../app/models/user.js";

const router = Router();

router.post("/login", async (request, response) => {
    const { username, password } = request.body.login || {};
    
    if(!username || !password) {
        response.status(401);
        response.send({ status: "Failed on query" });
        return;
    }

    const user = await User.findOne({ where: { username, passwordHash: password } });

    if (user) {
        request.session.userId = user.id;
        response.send({ status: "Success", user });

    } else {
        response.status(401);
        response.send({ status: "Failed on login" });
    }
});

router.post("/logout", async (request, response) => {
    if (request.session.userId) {
        delete request.session.userId;
        response.send({ status: "Success" });
    
    } else {
        response.status(401);
        response.send({ status: "Failed" });
    }
});

router.post("/register", async (request, response) => {

    const { username, password, email } = request.body.register || {};
    console.log(username);
    
    if(!username || !password || !email) {
        response.status(401);
        response.send({ status: "Failed on query" });
        return;
    }

    const user = User.build({ username, email, passwordHash: password });
    const success = await user.save();

    if (success) {
        response.send({ status: "Success", user });
        request.session.userId = user.id;
        
    } else {
        response.status(401);
        response.send({ status: "Failed on save" });
    }
});

export default router;
