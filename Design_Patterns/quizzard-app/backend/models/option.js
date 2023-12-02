//Strategy Pattern
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchema = new Schema({
    question: { type: Schema.Types.ObjectId, ref: 'Question' },
    optionText: { type: String, required: true },
    isCorrect: { type: Boolean, default: false },
});

module.exports = mongoose.model('Option', OptionSchema);
