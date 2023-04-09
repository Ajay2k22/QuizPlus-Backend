import Joi from 'joi'
import { ErrorHandler } from '../../../middleware/index.js'
import { RegisterModal } from '../../../model/index.js'
import bcrypt from 'bcrypt'
export const registerController = {
    async register(req, res, next) {

        // check the req.body
        console.log(req.body)

        // validate request
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        })

        const { error } = registerSchema.validate(req.body)

        if (error) {
            return next({ message: 'Validation Error', statuscode: 400 })
        }

        // 1.name email password take
        const { name, email, password } = req.body

        // 2.check email is present
        try {
            let res = await RegisterModal.exists({
                email
            })
            if (res) {
                return next({ message: 'Email is already Taken', statuscode: 400 })
            }
        }
        catch (e) {
            return next({ message: ` ${e} Unable to check email `, statuscode: 400 })
        }
        // if present send statuscode with email is already taken
        // else hash the password and stored in a database
        const hashPassword = await bcrypt.hash(password, 10);

        const register = new RegisterModal({
            name, email, password: hashPassword
        })

        try {
            const result = await register.save()
            console.log("register sucessfully")
            return res.status(200).json({
                message: "Registered Successfully",
                statuscode: 200,
                success: true
            })
        }
        catch (e) {
            return next({ message: 'Unable to save', statuscode: 400 })
        }
    }
}