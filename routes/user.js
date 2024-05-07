import { Router } from "express";
import { User } from "../app/models/user.js";

const router = Router();

router.post("/login", async (request, response) => {
    const { username, password } = request.query;
    const user = await User.findOne({ where: { username, password } });

    if (user) {
        request.session.userId = user.id;
        response.send({ status: "Success", user });

    } else {
        response.status(401);
        response.send({ status: "Failed" });
    }
});

router.post("/logout", async (request, response) => {
    const { username, password } = request.query;

    if (request.session.userId) {
        delete request.session.userId;
        response.send({ status: "Success" });
    
    } else {
        response.status(401);
        response.send({ status: "Failed" });
    }
});

router.post("/register", async (request, response) => {
    const { username, password } = request.query;
    const user = await User.create({ username, password });

    if (user) {
        response.send({ status: "Success", user });

    } else {
        response.status(401);
        response.send({ status: "Failed" });
    }
});

export default router;
