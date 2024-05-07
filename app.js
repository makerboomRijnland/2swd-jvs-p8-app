import express, { json } from "express";
import apiRouter from "./routes/api.js";
import userRouter from "./routes/user.js";
import session from "express-session";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());

app.use(express.static("static"));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);

app.use("/api", apiRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});