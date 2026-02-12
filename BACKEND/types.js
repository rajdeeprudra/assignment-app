const zod = require("zod");

const createTodos = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo =zod.object({
    id: zod.string().nonempty()
}); 


module.exports={
    createTodos:createTodos,
    updateTodo:updateTodo
};

