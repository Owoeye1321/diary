
      const router = require('express').Router()
      const nodemailer = require('nodemailer')
      const user = require('../model/userModel')

router.post('/',async(req, res) =>{
  console.log(req.body)
   
   async function main() {

                  const email = req.body.data.email
                    await user.find({email:email},( request , response)=>{
                        console.log(response)
                    })


                // create reusable transporter object using the default SMTP transport
                    let transporter = await nodemailer.createTransport({
                      host: "smtp.gmail.com",
                          port: 465,
                      secure: true, // true for 465, false for other ports
                    auth: {
                        user: "owoeye1321@gmail.com", // generated ethereal user
                        pass: "Owoeye1234", // generated ethereal password
                }
                },(err, result)=>{
                    if(!err)console.log(result);console.log(err)
                });
            // send mail with defined transport object
             await transporter.sendMail({
               from:email, // sender address
                    to: "Owoeye1321@gmail.com", // list of receivers
                        subject: subject, // Subject line
                   html:`<h1>Hello C -Rentals</h1> <h5>I'm ${fname} </h5> \n <h6>${message}</h6>` // plain text body
            },(err, result)=>{
                if(!err){ 
                    console.log('working on sending the emails')
                       console.log(result);
                    res.send('success')
                }else{
                    console.log('An error has occured and an issue need to be fixed')
                        console.log(err)
                    }
            }); 
        // console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview only available when sending through an Ethereal account
            // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        
        main().catch(console.error);
      });

module.exports = router