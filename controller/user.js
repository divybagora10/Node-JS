const User = require("../user")

// const User = mongoose.model("user",userSchema);

exports.getUsers = async(req,res)=>{

    try {
        const users = await User.find();
        res.status(200).send({message : "user fetched"  , data : users})
        
    } catch (error) {
        res.status(500).send(error);
    }
    // const user = await User.findById (req.params.id);
    // if (!user) {
    //     res.send({message : "user not found"});
    // }
    // else {
    //     res.send({message : "user dertails are:" , data : user});
    // }

    //---------------------------------------------

    // this method is used to get user details by id entered by the admin


    // const allDbUsers = await User.find({});
    // res.send({messgae : "successfully fetched" , users : allDbUsers});

    // upper method is used to get all the users



     // http://localhost:3000/api/user

    //  res.send({message : "userFetched" , data : users});
    //  // res.status(500).send({message : "error"});
 
}

exports.createUser = async (req,res) =>{

    // const userData = req.body;

    // if (!userData.firstName||
    //     !userData.lastName||
    //     !userData.email||
    //     !userData.contactDetails||
    //     !userData.gender
    // ){
    //     res.status(404).send({message : "all fields are required"});
    // }
    

    try {

   
    const {firstName , lastName , email, contactDetails , gender} = req.body;
    const user  = new User({firstName : firstName , lastName : lastName , email : email, contactDetails : contactDetails , gender :gender});

    const existingUser= await User.findOne({email :email}); // to check the email already exits or not 
    console.log(existingUser)

    if (existingUser){
        return res.status(400).send({message : "user already exits"});
    } 

    await user.save();
    res.status(200).send({message : "user created", data : user});
        
    } catch (error) {
        res.status(400).send(error);
    }


    

    //---------------------------------
   

    // const body = req.body
    // if (
    //     !body ||
    //     !body.firstName||
    //     !body.lastName ||
    //     !body.email||
    //     !body.contactDetails||
    //     !body.gender
    // ){
    //     return res.status(400).send({message :"All fields are required"})
    // }



    // const result = await User.create({
    //     firstName : body.firstName,
    //     lastName : body.lastName,
    //     email : body.email,
    //     contactDetails : body.contactDetails,
    //     gender : body.gender
    // }); 
    // console.log(result);

    // return res.status(201).json({msg:"Success"})

    //----------------------------------------------------------------

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