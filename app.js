import express, { json } from 'express';
import api from './routes/api.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(express.static('static'));

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.use('/api', api);