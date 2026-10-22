import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    });

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



