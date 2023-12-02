const router = require('express').Router();
let Option = require('../models/option');

router.route('/').get((req, res) => {
    Option.find()
        .then(options => res.json(options))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const optionText = req.body.optionText;
    const question = req.body.question;

    const newOption = new Option({
        optionText,
        question
    });

    newOption.save()
        .then((newOption) => res.json(newOption))  // Send the entire new option document as the response
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    Option.findById(req.params.id)
        .then(option => {
            option.questionId = req.body.questionId;
            option.optionText = req.body.optionText;
            option.isCorrect = req.body.isCorrect;

            option.save()
                .then(() => res.json('Option updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Option.findByIdAndDelete(req.params.id)
        .then(() => res.json('Option deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
