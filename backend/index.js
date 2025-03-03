import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

//Congigure dotenv
dotenv.config({});

const PORT = process.env.PORT || 8000;
const app = express();

const _dirname = path.resolve();

//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*' , (req,res)=>{
    res.sendFile(path.resolve(_dirname , "frontend" , "dist" , "index.html"));
})
app.listen(PORT , () => {
    console.log("Server Created");
})

