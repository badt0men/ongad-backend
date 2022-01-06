import {TodoModel} from './model.js';

export const GET_ALL_TODOS = (req, res) => {
    TodoModel.find((err, result) => {
     if (err) {
         console.log(err)
     } else {
         res.json(result);
     }
 }) 
 }

 export const GET_TODO_BY_ID = (req, res) => {
    const id = req.params.id;
    TodoModel.findById({_id: id}, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result);
        }
    })
};

export const ADD_NEW_TODO = (req, res) => {
    const data = req.body
    const todo = new TodoModel(data);
    todo.save((err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("todo created!")
            res.send("todo created!")
        }
    })
}

export const UPDATE_TODO =  (req, res) => {
    const id = req.params.id;   
    const data = req.body;
    TodoModel.findByIdAndUpdate({_id:id}, data, (err, result) => {
        if (err || !result) {
            console.log("An Error Occured... Please try again.")
        } else {
            console.log("todo updated!")
            res.send("todo updated!")
        }
    })
}

export const DELETE_TODO = (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndRemove({_id: id}, (err, result) => {
        if (err || null || !result) {
            console.log(err)
            console.log("No data match found. Already deleted bro!")
        } else {
            console.log("todo deleted!")
            res.send("todo deleted!")
        }
    })
}