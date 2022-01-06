import { Router } from 'express';
const router = Router();
import {
GET_TODO_BY_ID, 
GET_ALL_TODOS, 
ADD_NEW_TODO, 
UPDATE_TODO,
DELETE_TODO,
} from './controller.js'; //controller/callback functions for each route

// All todo list
router.get('/', GET_ALL_TODOS)

//find data by id
router.get('/:id', GET_TODO_BY_ID);

//post a new entry
router.post('/', ADD_NEW_TODO);

//update an existing entry
router.put('/:id', UPDATE_TODO);

//delete an entry
router.delete('/:id', DELETE_TODO);

const todos = router //renaming the router to todos
export default todos;