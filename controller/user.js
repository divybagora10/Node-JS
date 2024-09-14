const User = require("../user")

// const User = mongoose.model("user",userSchema);

exports.getUsers = async(req,res)=>{
    const user = await User.findById (req.params.id);
    if (!user) {
        res.send({message : "user not found"});
    }
    else {
        res.send({message : "user dertails are:" , data : user});
    }

    // this method is used to get user details by id entered by the admin


    // const allDbUsers = await User.find({});
    // res.send({messgae : "successfully fetched" , users : allDbUsers});

    // upper method is used to get all the users



     // http://localhost:3000/api/user

    //  res.send({message : "userFetched" , data : users});
    //  // res.status(500).send({message : "error"});
 
}

exports.createUser = async (req,res) =>{
    const body = req.body
    if (
        !body ||
        !body.firstName||
        !body.lastName ||
        !body.email||
        !body.contactDetails||
        !body.gender
    ){
        return res.status(400).send({message :"All fields are required"})
    }

    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        contactDetails : body.contactDetails,
        gender : body.gender
    }); 
    console.log(result);

    return res.status(201).json({msg:"Success"})

    // const data = req.body;
    // const modifiedData ={id : users.length+1, ...data};
    // users.push(modifiedData);
    // res.status(201).send({message : "user Created" , data: data});
}

exports.updateUser = async(req,res) =>{

    await User.findByIdAndUpdate (req.params.id , {lastName : "Changed to other"});
    res.send({message : "successfully updated"});





    //-- BASIC METHOD TO UPDATE THE DATA IN JSON FILE
    // const id = req.params.id;
    // let user = users.find(item => item.id === +id);

    // if (!user){
    //     return res.status(404).send({message : "user not found" });
    // }
    // // user.contactNumber =req.body.contactNumber;

    // user = req.body
    // const userIndex = users.findIndex(item => item.id === +id);

    // users[userIndex] = user;
    // res.status(202).send({message :"user updated"});
}

exports.deleteUser = async (req,res)=>{
   
    await User.findByIdAndDelete(req.params.id)
    res.send({message : "Pending"})
   
   
    // const  id = req.params.id;
    // const userIndex =  users.findIndex(item=>item.id === +id);

    // if (userIndex === -1){
    //     return res.status(404).send({message : "user not found"});
    // }

    // const deletedUser = users.splice(userIndex , 1);
    // res.status(202).send({message :"user deleted" , data : deletedUser});
}

// index.js >> router >>controller >> model