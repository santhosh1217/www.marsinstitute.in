const { insert } = require("../models/registerDao")
const { sendmailHr,sendmailStudent} = require("./mailService")

function register(req, res) 
{
    console.log(req.body)
    const data = { name: req.body.name, mail: req.body.mail, mobile: req.body.mobile,course:req.body.course, studymode: req.body.studymode,standard:req.body.standard, stream:req.body.stream , duration :req.body.duration }
    sendmailHr(data)
    sendmailStudent(data)
    insert(data)
    res.send("registered successfully")
}
module.exports = { register }




