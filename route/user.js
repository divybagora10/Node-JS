const express = require("express");

const users = require("../user");
const userController = require("../controller/user")
const router = express.Router();
const middleware1 = require("../middleware/middleware1")


router.get ("/user",userController.getUsers);
// router.get("/user",(req,res)=>{
//     // http://localhost:3000/api/user

//     res.send({message : "userFetched" , data : users});
//     // res.status(500).send({message : "error"});

// });


router.post ("/user",userController.createUser);
// router.post("/user",(req,res)=>{


//     const data = req.body;
//     const modifiedData ={id : users.length+1, ...data};
//     users.push(modifiedData);
//     res.status(201).send({message : "user Created" , data: data});
// });

router.put("/user/:id",userController.updateUser)

// router.put("/user/:id",(req,res)=>{
//     const id = req.params.id;
//     const user = users.find(item => item.id === +id);

//     if (!user){
//         return res.status(404).send({message : "user not found" });
//     }
//     user.contactNumber =req.body.contactNumber;
//     res.status(202).send({message :"user updated"});
// });

router.delete("/user/:id",userController.deleteUser);

// router.delete("/user/:id",(req,res)=>{
//     const  id = req.params.id;
//     const userIndex =  users.findIndex(item=>item.id === +id);

//     if (userIndex === -1){
//         return res.status(404).send({message : "user not found"});
//     }

//     const deletedUser = users.splice(userIndex , 1);
//     res.status(202).send({message :"user deleted" , data : deletedUser});
    
// });

module.exports = router;