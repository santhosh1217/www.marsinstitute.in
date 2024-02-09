const {MongoClient} = require("mongodb")
async function getCollection(collectionName)
{
    const client =  new MongoClient("mongodb://185.199.53.88:27017/?directConnection=true&appName=mongosh+2.1.4")
    await client.connect()
    const database = await client.db("marsinstitute")
    const collection = await database.collection(collectionName) 
    return collection   
}

module.exports = {getCollection}
