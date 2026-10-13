import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import "dotenv/config";
// import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import express from "express"


// method 2
connectDB()
.then(()=>{

    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running at port${process.env.PORT}`);
    })


})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAIL :",error)
})


// method 1

// const app = express();

// // Immediately invoked async function
// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.error("ERROR:", error);
//     });

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on :${process.env.PORT}`)
//     })


//   } catch (error) {
//     console.error("ERROR:", error);
//     throw error;
//   }
// })();





// method 2



