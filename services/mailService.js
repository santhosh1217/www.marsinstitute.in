const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(
{
    service: 'Gmail',
    auth: 
    {
        user: 'indimano321@gmail.com', // Your Gmail email address
        pass: 'zaaf edof uodq ykme'
 
    }
});
function sendmailStudent(data) 
{
    let mailOptions =
    {
        from: 'indimano321@gmail.com', // Sender address
        to: [data.mail] ,// List of recipients
        subject: 'Welcome to IIT Coaching at Mars Institute!', // Subject line
        text: `

        Dear ${data.name},
        
        Congratulations on joining our esteemed IIT coaching program at Mars Institute! 🌟
        
        You're about to embark on an incredible journey, and we're thrilled to have you on board! Here's a glimpse of what awaits you:
        
        
        Tailored Curriculum: Our curriculum is meticulously crafted to cover all essential topics for the IIT entrance exams. You'll receive focused instruction to enhance your understanding and problem-solving skills.
        
        
        Cutting-edge Facilities: Explore our modern facilities, including an extensive library and advanced study materials. You'll also have access to online resources to support your preparation.
        
        
        Personalized Support: Our dedicated team is here to support you every step of the way. Whether you need academic guidance, mentoring, or exam strategies, we've got you covered.
        
        
        We encourage you to dive into our comprehensive study programs and make the most of the resources available to you. Remember, your success is our priority!
        
        If you have any questions or need further information, feel free to reach out to us at support@marsinstitute.in.
        
        Let's work together to turn your academic aspirations into reality!
        
        Best wishes for a rewarding learning journey,
        
   
        admin
        Mars Institute's`
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

function sendmailHr(data)
{
    let mailOptions =
    {
        from: 'indimano321@gmail.com', // Sender address
        to: ["1217santhosh@gmail.com"] ,// List of recipients
        subject: `New Registration: ${data.name} for ${data.course}`, // Subject line
        text: `
        Dear sir,
        
        We have received a new registration for our ${data.course} coaching program.Below are the details:

        Student Name : ${data.name}
        Board : ${data.boardtype}
        class : ${data.standard} th standard
        Course Registered : ${data.course}
        mobile : ${data.mobile}
        duration : ${data.duration} months

        Thank you for your attention to this matter.
        Best regards, ${data.name}`
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



module.exports = {sendmailHr,sendmailStudent}