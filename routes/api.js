import { Router } from "express";

const router = Router();

router.get("/status", (request, response) => {
    const status = {
        status: "Running",
    };

    response.send(status);
});

export default router;
