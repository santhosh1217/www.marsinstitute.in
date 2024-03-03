const { insert } = require("../models/registerDao")
const { sendmailHr,sendmailStudent} = require("./mailService")

function register(req, res) 
{
    console.log(req.body)
    const data = { name: req.body.name,boardtype:req.body.board, mail: req.body.mail, mobile: req.body.mobile,course:req.body.course, studymode: req.body.studymode,standard:req.body.standard, duration :req.body.duration }
    sendmailHr(data)
    sendmailStudent(data)
    insert(data)
    console.log("hii")
    res.redirect("/")
}
module.exports = { register }




