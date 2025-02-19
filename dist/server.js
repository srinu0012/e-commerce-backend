import Express from "express";
import cors from "cors";
import { SERVER_PORT } from "./config/config.js";
import bodyParser from "body-parser";
const server = Express();
server.use(cors({
    credentials: true
}));
server.use(bodyParser.json());
server.get("/hi", (req, res) => {
    res.send("hiii");
});
server.post("/auth", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.send({ username, password });
});
server.listen(SERVER_PORT, () => {
    console.log(`server connected at port ${SERVER_PORT}`);
});
