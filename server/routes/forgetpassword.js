require('dotenv').config();
   const clientId = process.env.client_id
   const client_secret = process.env.client_secret
   const token_uri = process.env.token_uri

      const router = require('express').Router()
      const nodemailer = require('nodemailer')
      const user = require('../model/userModel')

router.post('/',async(req, res) =>{
  console.log(req.body)
   
   async function main() {

                  const email = req.body.email
                   const response =  await user.find({email:email})
                       if(response){
                         console.log(response)
                        res.send('success')

                       response.map( async (key)=>{
                              // create reusable transporter object using the default SMTP transport
                    let transporter = await nodemailer.createTransport({
                    //   host: "smtp.gmail.com",
                    //       port: 465,
                    //   secure: true, // true for 465, false for other ports
                    // auth: {
                    //     user: "owoeye1321@gmail.com", // generated ethereal user
                    //     pass: "Owoeye1234", // generated ethereal password
                    service: 'gmail',
                    auth: {
                      type: 'OAuth2',
                      user: "owoeye1321@gmail.com",
                      pass: "Owoeye1234",
                      clientId: clientId,
                      clientSecret: client_secret,
                      refreshToken: token_uri
                    }
                
                },(err, result)=>{
                    if(!err)console.log(result);console.log(err)
                });
            // send mail with defined transport object
             transporter.sendMail({
                               from: "Owoeye1321@gmail.com",
                               to: key.email,
                               subject: "Forget Password Reset",
                               html: `<h1>Hello ${key.username}, </h1> \n <h5>Your password is ${key.password} </h5>` // plain text body
                           }, (err, result) => {
                               if (!err) {
                                   console.log('working on sending the emails');
                                   console.log(result);
                                   res.send('success');
                               } else {
                                   console.log('An error has occured and an issue need to be fixed');
                                   console.log(err);
                               }
                           })
                  
            }); 
        }else{
            console.log("Unable to send email details")
        }
                       


               
        // console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview only available when sending through an Ethereal account
            // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        
        main().catch(console.error);
      });

module.exports = router