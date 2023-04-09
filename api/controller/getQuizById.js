import { QuizModal } from "../../model/index.js"

export const getQuizById = {
    async getQuizById(req, res, next) {
        // check req.body
        console.log(req.body)

        // grab data
        const { questionId, checkanswer } = req.body

        // grab the question send it to a client
        try {

            let response = await QuizModal.findById(questionId);
            console.log("Fetch Quiz Id Sucessfully sucessfully")
            return res.status(200).json({
                message: "Fetch Quiz Successfully",
                data: response,
                statuscode: 200,
                success: true
            })
        } catch (e) {
            return next({ message: 'Unable to get Quiz By Id', statuscode: 400 })
        }

    }
}