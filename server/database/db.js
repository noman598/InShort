import mongoose from "mongoose";

// to connect With mongoDB cloud need to add async and await keyword cause some reason.
// Generally we use try-catch cause our cloud database can be get some error.

const Connection = async ()=>{
    const URL = `mongodb+srv://noman598:%40123Khan@cluster0.tnmxhlm.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log("successfully connected")
    }
    catch(err){
        console.log("Error" , err);
    }
}

export default Connection;