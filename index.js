import express from "express";
import bodyParser from "body-parser";

import userRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log('test');
    res.send('hola');
})

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));