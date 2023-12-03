const router = require('express').Router();
let Quiz = require('../models/quiz');
let User = require('../models/user');
let Question = require('../models/question');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Quiz.find()
        .populate('questions')
        .then(quizzes => res.json(quizzes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
    const { title, questions, createdBy } = req.body;

    const user = await User.findOne({ email: createdBy });
    if(!user) return res.status(400).json({ msg: 'User not found' });
    
    const newQuiz = new Quiz({
        title,
        createdBy: user._id,
    });

    try {
        for (let question of questions) {
            const newQuestion = new Question({
                quizId: newQuiz._id,
                questionText: question.questionText,
                options: question.options
            });

            const savedQuestion = await newQuestion.save();

            newQuiz.questions.push(savedQuestion._id);
        }

        const savedQuiz = await newQuiz.save();

        res.json(savedQuiz);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.route('/update/:id').post(async (req, res) => {
    const { title, questions, createdBy } = req.body;
    
    try {
        const user = await User.findOne({ email: createdBy });
        if(!user) return res.status(400).json({ msg: 'User not found' });

        const quiz = await Quiz.findById(req.params.id);
        if(!quiz) return res.status(400).json({ msg: 'Quiz not found' });

        quiz.title = title;
        quiz.createdBy = user._id;

        await Question.deleteMany({ quizId: quiz._id });

        for (let question of questions) {
            const newQuestion = new Question({
                quizId: quiz._id,
                questionText: question.questionText,
                options: question.options
            });

            const savedQuestion = await newQuestion.save();

            quiz.questions.push(savedQuestion._id);
        }

        await quiz.save();

        res.json(quiz);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.route('/:id').delete((req, res) => {
    Quiz.findByIdAndDelete(req.params.id)
        .then(async () => {
            await Question.deleteMany({ quizId: req.params.id });

            res.json('Quiz deleted.');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
