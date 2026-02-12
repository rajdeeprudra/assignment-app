const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://rajdeeprudra2003_db_user:AjDRWy2QQJBfh1wR@cluster0.u2ecaox.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

});

const Todo = mongoose.model('todos',todoSchema);

module.exports={
    Todo
}

//rajdeeprudra2003_db_user


//AjDRWy2QQJBfh1wR