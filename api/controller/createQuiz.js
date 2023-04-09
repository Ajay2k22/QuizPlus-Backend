import { QuizModal } from "../../model/index.js"

export const createQuiz = {
    async createQuiz(req, res, next) {
        // check the req.body
        console.log(req.body)

        // grab the data
        const { title, questions } = req.body

        try {
            let quiz = new QuizModal({
                title,
                questions
            })
            const result = await quiz.save()
            console.log("Quiz Created Successfully")
            return res.status(200).json({
                message: "Quiz Created Successfully",
                statuscode: 200,
                success: true
            })
        }
        catch (e) {
            return next({ message: 'Unable to create Quiz', statuscode: 400 })
        }
    }
}