import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser";
import userRoute from "./routes/user_route.js";
import messageRoute from "./routes/message_route.js";
import { app ,server} from "./socketIO/server.js";
import path from "path";


dotenv.config();

//middleWare
app.use(express.json())
app.use(cors())
app.use(cookieParser())



const PORT=process.env.PORT||4004
const URI=process.env.MONGODB_URI

try{
mongoose.connect(URI);
(console.log("connected to mongodb"))
}
catch(error){
  console.log(error)

}
//routes

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute)


if(process.env.NODE_ENV==="production"){
  const dirPath=path.resolve();

  app.use(express.static("./Client/dist"));

  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"./Client/dist","index.html"));
  })
}

server.listen(PORT,()=>{
  console.log(`Server is listening on the port ${PORT}`)
})

// server.listen(PORT,()=>{
//   connectToDB();
//   console.log(`server listening on port ${PORT}`);

// });