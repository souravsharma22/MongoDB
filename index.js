import express from "express"
import mongoose from "mongoose"
import { Schema } from "mongoose";
import path from "path"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", 'ejs')


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/schat");
}

main().then(()=>{
    console.log("Connection successfull..!")
})
.catch((err)=>{
    console.log(err)
})

const student = new Schema({
    Name: String,
    Roll : Number,
    Branch: String,
    State: String,
    Marks : Number,
    Career :{
        Profession: String,
        skill : String,
        salary: Number
    }
    
});

const user = mongoose.model('user', student);


// const user1 = new user({
//     Name: "Sourav Sharma",
//     Roll: 38,
//     State:"Bihar",
//     Branch: "CSE",
//     Marks:89,
//     Career:{
//         Profession: "Coder",
//         skill: "S",
//         salary: 120000
//     }
// })
// const user2 = new user({
//     Name: "Aniket Sharma",
//     Roll: 20,
//     State:"Bihar",
//     Branch: "ME",
//     Marks:82,
//     Career:{
//         Profession: "Mech",
//         skill: "S",
//         salary: 100000
//     }
// })

// // user1.save()   // retuns a  promise
// // user2.save().then((res)=>{
// //     console.log(res)
// // }).catch((err)=>{
// //     console.log(err);
// // })

// //-------iserting many in the database-----///

// const db = user.insertMany([
//     {
//     Name: "Aftab",
//     Roll: 20,
//     State:"Bihar",
//     Branch: "CSE",
//     Marks:82,
//     Career:{
//         Profession: "codetech",
//         skill: "S",
//         salary: 100000
//     }
// },
// {
//     Name: "Soumajit Bhatacharjee",
//     Roll: 23,
//     State:"Bihar",
//     Branch: "EE",
//     Marks:82,
//     Career:{
//         Profession: "EE",
//         skill: "S",
//         salary: 90000
//     }
// },
// {
//     Name: "Suraj Varma",
//     Roll: 25,
//     State:"Bengal",
//     Branch: "ME",
//     Marks:76,
//     Career:{
//         Profession: "ee",
//         skill: "A",
//         salary: 60000
//     }
// }
// ])

// db.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error);
// })

// user.find({'Career.salary': {$gt : 100000}}).then((res)=>{
//     console.log(res[0].Name);
// })

// user.updateOne({Name:"Aftab"}, {Roll:17}).then((res)=>{
//     console.log(res);
// })

// user.updateMany({'Career.salary':{$lt : 100000}}, {$inc: { 'Career.salary': 15000}}).then((res)=>{
//     console.log(res);
// })

// user.findOneAndUpdate({Name: 'Sourav Sharma'}, {$inc :{'Career.salary':10000}}, {new: false}).then((res)=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// user.findOneAndUpdate({Name: 'Sourav Sharma'}, {$inc :{'Career.salary':10000}}, {new: true}).then(
//     (res)=>{
//         console.log(res)
//     }
// ).catch(err=>{
//     console.log(err);
// })

user.deleteOne({Roll : 23}).then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

app.get("/", (req,res)=>{
    res.send("The server is runnning ");
})



app.listen(5000, ()=>{
    console.log("THe server is running on port 5000 ")
})