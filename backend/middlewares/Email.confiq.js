import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "tulsi.gautam0000@gmail.com",
    pass:process.env.EMAIL_PASS,
  },
  
});


  
