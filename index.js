import express from 'express';
import bodyParser from 'body-parser';
import todos from './src/routes/todos/index.js';

const port = process.env.PORT || 7000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use('/todos', todos); 

app.listen(port, () => {
    console.log(`server is running && listening on ${port}`)
})


