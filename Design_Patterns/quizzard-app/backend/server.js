const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const usersRouter = require('./routes/users');
const quizzesRouter = require('./routes/quizzes');
const questionsRouter = require('./routes/questions');
const optionsRouter = require('./routes/options');

//initialize express with cors for cross origin resource sharing
const app = express();
app.use(cors());
app.use(express.json());

//connect to mongodb . 
mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch(err => console.error('Could not connect to MongoDB', err));


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/users', usersRouter);
app.use('/quizzes', quizzesRouter);
app.use('/questions', questionsRouter);
app.use('/options', optionsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
