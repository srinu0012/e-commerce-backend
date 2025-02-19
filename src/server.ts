import express  from "express";
import cors from "cors"
import { SERVER_HOST, SERVER_PORT } from "./config/env.js";
import bodyParser from "body-parser";
import pool from "./config/db.js";


const server=express()

server.use(cors())
server.use(bodyParser.json())







server.get("/hi",(req,res)=>{
    res.send("hiii")
})

server.post("/auth",(req,res)=>{
    const {username,password}=req.body
    console.log(username,password)
    res.send({username,password})
})



server.listen(SERVER_PORT,()=>{
    console.log(`server connected at port ${SERVER_PORT}`)
})

