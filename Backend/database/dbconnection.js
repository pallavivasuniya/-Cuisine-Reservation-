import mongoose from 'mongoose';
import dotenv from 'dotenv';


export const dbconnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URL,{
        dbName: "RESTAURANT",
    }).then(() =>{
        console.log("connected to database successfully!")
}).catch (err=>{
    console.log(`some error occured while connecting to database! ${err}`);
});

};

