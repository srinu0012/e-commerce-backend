import dotenv from "dotenv";
dotenv.config();
export const SERVER_HOST = process.env.SERVER_HOSTNAME || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 3200;
