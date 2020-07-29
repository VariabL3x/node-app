const Todo = require('../models/Todo');

const get_all_todos = (req,res) =>{
    Todo.find().sort({createdAt:-1})
    .then((todos)=>{
        res.render('index',{title:'Index',todos})
    }).catch(console.log);
}

const create_todos = (req,res) =>{
    res.render('addToDo',{title:'Create a new todo'})
}

const get_one_todo = (req,res) =>{
    const {id} = req.params;
    Todo.findById(id)
    .then(todo=>{
        res.render('details',{todo,title:'Todo Details'})
    })
    .catch(console.log)

}

const delete_one_todo = (req,res) =>{
    const {id} = req.params;
    Todo.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect:'/todos'})
    })
    .catch(console.log)
}

const create_one_todo = (req,res) =>{
    const {title,task} = req.body;
    const todo = new Todo({
        title,
        task
    })

    todo.save()
    .then((result)=>{
        res.redirect('/todos');
    })
    .catch(console.log)
}
module.exports = {
    get_all_todos,
    create_todos,
    get_one_todo,
    delete_one_todo,
    create_one_todo,
}