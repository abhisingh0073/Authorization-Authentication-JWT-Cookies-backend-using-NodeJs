import express from 'express';
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { checkForAuthenticaionCookies } from './middlewares/authMiddleware.js';



const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticaionCookies("mindpost"));


app.get("/", (req, res) => {
    res.send(`welcome ${req.user.name}`)
});

app.use("/user", userRoute)




export default app;