// 1. import mongoose
const  mongoose =  require('mongoose');

mongoose.connect("mongodb+srv://shehnazshihab:shehnazzshifa@cluster0.e3vkxz7.mongodb.net/database1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connect to db");
})
.catch((error)=>{
    console.log(error);
});
