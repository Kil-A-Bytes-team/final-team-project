import env from "src/env";
import * as nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: env.EMAIL_ADDRESS,
        pass: env.EMAIL_PASSWORD,
    }
})
export const sendEmail = (to: string, subject: string, message: string)=>
    new Promise((resolve, reject) =>{
        const mailOptions ={
            from: env.EMAIL_ADDRESS,
            to: to,
            subject: subject,
            text: message,
        };
        transporter.sendEmail(mailOptions, function (error, info){
            if(error){
                reject(error.message);
            }else {
                resolve('Email sent: ' + info.response);
            }
        })
    })
