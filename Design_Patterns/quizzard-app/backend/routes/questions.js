const router = require('express').Router();
let Question = require('../models/question');

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const questionText = req.body.questionText;
    const options = req.body.options;

    const newQuestion = new Question({
        questionText,
        options
    });

    newQuestion.save()
        .then((newQuestion) => res.json(newQuestion))  // Send the entire new question document as the response
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Question.findById(req.params.id)
        .then(question => {
            question.questionText = req.body.questionText;
            question.options = req.body.options;

            question.save()
                .then(() => res.json('Question updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json('Question deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;