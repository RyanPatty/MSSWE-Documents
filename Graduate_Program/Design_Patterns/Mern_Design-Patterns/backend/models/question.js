//Composite Pattern
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    quiz: { type: Schema.Types.ObjectId, ref: 'Quiz' },
    questionText: { type: String, required: true },
    options: [{ type: Schema.Types.ObjectId, ref: 'Option' }],
});

module.exports = mongoose.model('Question', QuestionSchema);