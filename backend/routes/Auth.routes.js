import express from 'express'
import { Reigster, VerfiyEmail } from '../controllers/Auth.js'

const AuthRoutes=express.Router()

AuthRoutes.post('/register',Reigster)
AuthRoutes.post('/verifyemail',VerfiyEmail)
export default AuthRoutes