import express from 'express'
import mongoose from 'mongoose' 
import chat  from "./models/chat.js"
const app = new express();

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/schat")
}

main().then(()=>{
    console.log("Connected successfully.......!")
}).catch(err=>{
    console.log(err.errors.properties.message);
})

let chat1  = new chat({
    from: "Sourav",
    to: "Sumo",
    msg :"Hi there sumo",
    created_at: new Date()
})

chat1.save().then((res)=>{
    console.log(res)
}).catch(err=>{
    console.log(err);
})