import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

//Middleware
app.use(cors()); //allow request
app.use(express.json());

//Routes
app.use("/api/contacts", contactRoutes);


//Database Connection to MongoDB
mongoose.connect(process.env.MONGO_URL, {}).then(()=>{
    console.log("MongoDB Database Connected");

}).catch((err)=> {
    console.log("MongoDB database connection Error: " , err);
});

//Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});