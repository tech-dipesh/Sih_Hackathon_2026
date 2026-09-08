import express from "express"
import {config} from "dotenv"
import {env} from "@/env"
config({path: "../../env"})
const PORT=env.PORT || 5000
const app=express()
app.listen(PORT, ()=>console.log("Server is listening on the port: ", PORT))