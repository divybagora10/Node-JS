const express = require("express");
const userRouters = require("./route/user")
const productRoute = require("./route/product");
const userController = require("./controller/user")
const connectionDb = require("./config/db");
const connectDb = require("./config/db");
const userSchema = require("./model/user");
const { default: mongoose } = require("mongoose");
const cors = require("cors")
// express come in the form of function


const app = express();

app.use(express.json());
app.use(cors());

connectDb();

// const User = mongoose.model("user",userSchema);

const users = [
    {
        userName : " divybagora",
        emailId : "divy@gmail.com"
    }
]

const middleWare1 = (req,res,next) =>{
    console.log("Middleware 1 called");
    // res.send({message : "unAuthorized person"})
    next();
}

// app.use(middleWare1);

app.use("/api",userRouters); // http://localhost:3000/api/user
app.use("/products",productRoute);


const middleWare2 = (req,res,next)=>{
    console.log("Middleware2 called");
    next();
    
}


app.get("/",(req,res)=>{
    // res.send("hello from express")
    res.send({message : "User fetched", users : users});
});

app.post("/createUser",middleWare2,(req,res)=>{
    // http://localhost:3000/createUser
    const data = req.body;
    console.log(data);
    users.push(data);
    res.send({message : "user created", user : data});
})


app.put("/updateUser",(req,res)=>{

})


app.listen(5000,()=>{
    console.log("server is running on 5000")
})


// CRUD operations
// create read update delete