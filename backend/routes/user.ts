import { loginUser, signupUser } from "../controllers/userController"
import express, { Router } from "express"

const router: Router = express.Router()

router.post('/login', loginUser)

router.post('/signup', signupUser)

export default router