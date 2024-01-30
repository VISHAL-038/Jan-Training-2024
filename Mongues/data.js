var express =require('express')
const mongoose=require('mongoose')
const user=require('./user')
//const { applyDefaults } = require('./user')
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://localhost:27017/mongodb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
async function insertData()
{
    var a={"name":"Vishal","course":"mca"}
    var b=new user(a);
    var result=await b.save()
    console.log(result); 
}
async function getdata()
{
    var dt = await user.find();
    dt.forEach(row=>{
        console.log(row._id+"\t"+ row.name +"\t"+ row.course)
    }) 
}
async function delData(id)
{
    var dt = await user.deleteOne({_id:id});
}
// insertData()
// getdata()
delData("65b72b4211efb634e70ad21c")