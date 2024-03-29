import express from 'express';
import bodyParser from 'body-parser';
import Users from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', Users);



app.get('/', (req, res) => res.send('Hello from Homepage'));

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));
