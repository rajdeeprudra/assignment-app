const express = require ("express");
const { createTodos, updateTodo } = require("./types");
const { Todo } = require("./db");

const app = express();

app.use(express.json());


app.post("/todos", async(req,res)=>{
    const createPayload = req.body; 
    //zod validation line
    const parsedPayload = createTodos.safeParse(createPayload);

    if(!parsedPayload.success){
       return res.json("wrong input fields");
    }
    //put in mongodb
    
       await Todo.create({
            title :createPayload.title,
            description : createPayload.description,
            completed :false
       });
        res.json("Todo created successfully!")
        console.log(typeof req.body, req.body);

    
})


app.get("/todos", async(req,res)=>{
    const todos = await Todo.find({});
    console.log(todos);
    res.json(todos);
})


app.put("/completed", async(req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        return res.json({
            msg:"invalid credentials!"
        })
    }
   //update in mongodb
  await  Todo.update({
    _id : req.body.id
   },{
    completed: true
   })
   res.json({
    msg:"Todo Updated"
   })
})



app.listen(3001);