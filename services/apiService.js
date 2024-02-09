const { insert } = require("../models/registerDao")
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(
{
    service: 'Gmail',
    auth: 
    {
        user: 'joshcandyjosh@gmail.com', // Your Gmail email address
        pass: 'hujx skvj dvcc sqwm' // Your Gmail password
    }
});

function register(req, res) 
{
    console.log(req.body)
    const data = { name: req.body.name, mail: req.body.mail, mobile: req.body.mobile, studymode: req.body.studymode, center:req.body.center, classmode:req.body.classmode, stream:req.body.stream }
    sendMail(data)
    insert(data)
    res.send("registered successfully")
}

function sendMail(data) 
{
    let mailOptions =
    {
        from: 'joshcandyjosh@gmail.com', // Sender address
        to: [data.mail,"1217santhosh@gmail.com"] ,// List of recipients
        subject: 'Hello from Node.js', // Subject line
        text: 'Hello, this is a test email from Node.js!' // Plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) 
        {
            return console.log('Error occurred:', error);
        }
        console.log('Message sent successfully!');
        console.log('Message ID:', info.messageId);
    });
}
module.exports = { register }




