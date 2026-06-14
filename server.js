require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/tasks', require('./routes/taskRoutes'));

app.get('/', (req, res) => {
    res.send('To Do API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
