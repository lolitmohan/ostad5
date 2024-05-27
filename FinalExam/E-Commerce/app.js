const express =require('express');
const router =require('./src/routes/api');
const app= new express();

const bodyParser=require('body-parser');

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const path = require("path");






let URI="mongodb+srv://test1111:test1111@cluster0.nsiopuc.mongodb.net/Inventori";
let OPTION={user:'test1111',pass:'test1111',autoIndex:true}
// let URL="mongodb://localhost:27017/ecom4"
// let option={user:'',pass:"",autoIndex:true};
mongoose.connect(URI, OPTION={user:'test1111',pass:'test1111',autoIndex:true}
).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})


app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(bodyParser.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

app.set('etag', false);
app.use("/api/v1",router)



module.exports=app;