const express=require('express');
const UserController=require('../controllers/UserController');
const route=express.Router();



route.get("/createUser",UserController.CreateUser);
route.get("/readUser",UserController.ReadUser);
route.get("/updateUser",UserController.UpdateUser);
route.get("/deleteUser",UserController.DeleteUser);



module.exports=route;
