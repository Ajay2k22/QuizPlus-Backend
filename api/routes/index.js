import express from 'express'
import { registerController } from '../controller/auth/registerController.js'
import { createQuiz } from '../controller/createQuiz.js'
import { getallQuiz } from '../controller/getallQuiz.js'
import { getQuizById } from '../controller/getQuizById.js'
const router = express.Router()

router.post('/register', registerController.register)

router.post('/create-quiz', createQuiz.createQuiz)

router.get('/get-quiz', getallQuiz.getallQuiz)

router.get('/get-quizById', getQuizById.getQuizById)

export default router