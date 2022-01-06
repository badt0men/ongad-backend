//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const dbconnection = () => {
    const db_uri = 'mongodb://localhost:27017/todo-db'
    mongoose.connect(db_uri, {useNewUrlParser: true})
    .then(() => console.log("*******...App Connected to MongoDB...*******"))
    .catch((err) => console.error("Could not connect to MongoDB...", err))
    }

export default dbconnection
