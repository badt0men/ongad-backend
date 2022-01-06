import mongoose from 'mongoose';
import {TodoSchema} from './schema.js';
import dbconnection from '../../utils/dbClient.js';


//Initialize the db connection for use on this model
dbconnection()

export const TodoModel = mongoose.model('Todos', TodoSchema); 