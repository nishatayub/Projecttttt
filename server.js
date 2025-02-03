const express = require('express');
const dotenv = require('dotenv');
const mongoDB = require("mongoose");
const app = express();
app.use(express.json)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

const connectDB = async()=>{
    try{
        await mongoDB.connect("mongodb+srv://nishatayub702:nishat702@cluster0.qr0na.mongodb.net/heythere");
        console.log("Mongo connected")
    }catch{
        console.log("Error in connecting to the database");
    }
}
connectDB();
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.post("/signup",(req,res)=>{
    const Signup = async (req, res) => {
        try {
            const { userName, email, password, DOB } = req.body;
    
            if (!userName || !email || !password || !DOB) {
                return res.status(400).send({ message: "All fields are required" });
            }
    
            if (password.length <= 8 || password.length > 16) {
                return res.status(400).send({ message: "Password length should be greater than 8 and less than or equal to 16" });
            }
    
            return res.status(200).send({ userName, email, password, DOB });
    
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    };
    
    app.post("/signup", Signup);
    
    
})


