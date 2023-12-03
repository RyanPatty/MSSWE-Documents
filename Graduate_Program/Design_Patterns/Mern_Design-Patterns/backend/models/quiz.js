//Composite Pattern
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    title: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Quiz', QuizSchema);