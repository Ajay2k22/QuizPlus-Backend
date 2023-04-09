import { QuizModal } from "../../model/index.js"
export const getallQuiz = {
    async getallQuiz(req, res, next) {
        try {
            let response = await QuizModal.find({})
            console.log("Fetch Quiz Sucessfully sucessfully")
            return res.status(200).json({
                message: "Fetch Quiz Successfully",
                data: response,
                statuscode: 200,
                success: true
            })
        } catch (e) {
            return next({ message: 'Unable to get Quiz', statuscode: 400 })
        }
    }
}