const {getCollection} =  require("./baseDao")


function insert(data) 
{
    getCollection("studentRegister").then((collection)=>
    {

    collection.insertOne({"name":data.name,"mail":data.mail,"mobile":data.mobile,"studymode":data.studymode,"center":data.center,"class":data.classmode,"stream":data.stream})
})



}

module.exports = {insert}