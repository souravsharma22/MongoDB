import express from "express"
import mongoose from "mongoose";


const app = new express();

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/store")

}
main().then(()=>{
    console.log("Connection Successfull.........")

}).catch(err=>{
    console.log(err);
})


const bookSchema  = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author: String,
    Price: Number
})

const book = mongoose.model("book",bookSchema );

const book1 = new book({
    title: "Concept of Physics",
    author : "HC Verma",
    Price: 300

})

book1.save().then(res=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})







app.listen(3000, ()=>{
    console.log("listening on the port 3000");
})