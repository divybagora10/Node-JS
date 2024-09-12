const express = require("express");
const app = express();


app.use(express.json());

const user = [
    {
        username : "divybagora10",
        pasword : "123"
    }
]

const middleWare1 = (req,res,next)=>{
    console.log("Middleware1 called");
    next();
}

// app.use(middleWare1);

app.get("/",(req,res)=>{
    res.send({message : "user fetched" , users : user});
})

app.post("/createUser",middleWare1,(req,res)=>{
    const data= req.body;
    user.push(data);
    res.send({message: "user created" , users : user});
})


app.listen(9000,()=>{
    console.log("server is running on port 9000");
    
})