const middleware1 = (req,res,next)=>{

    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber % 2 !== 0){
        res.send("Unauthorized user" )
    }
    else {

        console.log("middleware1 is called");
        next();
    }
}

module.exports = middleware1;