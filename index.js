const express = require("express")
const app = express()
require("dotenv").config()
require("./config/db")
const TodoModel = require("./model/TodoModel")


app.get("/",async(req,res)=>{
    try{
        const allTodos = await TodoModel.find({});
        res.status(200).send({
            success:true,
            message:"all todo fetched :) ",
            data:allTodos
        })

    }catch(err){
        res.status(400).send({
            success:false,
            message:"something went wrong",
            data:[]
        })
    }
})

app.post("/",async(req,res)=>{
    try{
        const title = req.body.title
        const todo = await TodoModel.insertOne(title)
        res.status(200).send({
            success:true,
            message:"created todo successfully ",
            data:todo
        })

    }catch(err){
        res.status(400).send({
            success:false,
            message:"something went wrong",
            data:[]
        })
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port : ${process.env.PORT}`)
})



