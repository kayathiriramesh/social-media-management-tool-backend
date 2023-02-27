// for mongodb connect

const mongoose =require("mongoose");
//const CONNECTIONS=()=>{
mongoose.connect(

   `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@cluster0.mc3htnf.mongodb.net/SocialMedia`,
    {useNewUrlParser : true, useUnifiedTopology : true},
    (err) =>    
    {
        if (err) 
        {
        console.log("Error occured");
        console.log("Sorry we get error" + err)
        } else
        {
            console.log("CONNECTED")
        }
    }
);
//module.exports={CONNECTIONS}