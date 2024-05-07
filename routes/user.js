import { Router } from "express";
import { User } from "../app/models/user.js";

const router = Router();

router.post("/login", async (request, response) => {
    const { username, password } = request.query.user || {};
    const user = await User.findOne({ where: { username, passwordHash: password } });

    if (user) {
        request.session.userId = user.id;
        response.send({ status: "Success", user });

    } else {
        response.status(401);
        response.send({ status: "Failed" });
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
    const { username, password, email } = request.query.user || {};
    const user = await User.create({ username, email, passwordHash: password });

    if (user) {
        response.send({ status: "Success", user });
        request.session.userId = user.id;
        
    } else {
        response.status(401);
        response.send({ status: "Failed" });
    }
});

export default router;
