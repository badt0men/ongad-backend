import mongoose from 'mongoose';
var Schema = mongoose.Schema;


export const TodoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
});
