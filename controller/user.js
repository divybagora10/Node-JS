const users = require("../user")

exports.getUsers = (req,res)=>{
     // http://localhost:3000/api/user

     res.send({message : "userFetched" , data : users});
     // res.status(500).send({message : "error"});
 
}

exports.createUser = (req,res) =>{
    const data = req.body;
    const modifiedData ={id : users.length+1, ...data};
    users.push(modifiedData);
    res.status(201).send({message : "user Created" , data: data});
}

exports.updateUser = (req,res) =>{
    const id = req.params.id;
    let user = users.find(item => item.id === +id);

    if (!user){
        return res.status(404).send({message : "user not found" });
    }
    // user.contactNumber =req.body.contactNumber;

    user = req.body
    const userIndex = users.findIndex(item => item.id === +id);

    users[userIndex] = user;
    res.status(202).send({message :"user updated"});
}

exports.deleteUser = (req,res)=>{
    const  id = req.params.id;
    const userIndex =  users.findIndex(item=>item.id === +id);

    if (userIndex === -1){
        return res.status(404).send({message : "user not found"});
    }

    const deletedUser = users.splice(userIndex , 1);
    res.status(202).send({message :"user deleted" , data : deletedUser});
}

// index.js >> router >>controller >> model