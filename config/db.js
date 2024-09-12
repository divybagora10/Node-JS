const mongoose = require ("mongoose");

const connectDb =async  () => {
    try {

        const connection = await  mongoose.connect("mongodb://localhost:27017/technoEcon");
        console.log("server connected successfully");
    }
    catch(error){
        console.log("error connecting database" , error);
    }
}

module.exports = connectDb;