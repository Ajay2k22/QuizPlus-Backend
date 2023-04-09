import mongoose from 'mongoose';

const quizQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    answer: {
        type: Number,
        required: true
    }
});

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    questions: {
        type: [quizQuestionSchema],
        required: true
    }
});

// module.exports = mongoose.model('Quiz', quizSchema);
export const QuizModal = new mongoose.model("Quiz", quizSchema)
