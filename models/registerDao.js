const { getCollection } = require("./baseDao");

async function insert(data) {
    try {
        const collection = await getCollection("studentRegister");
        const result = await collection.insertOne({
            "name": data.name,
            "board": data.boardtype,
            "mail": data.mail,
            "mobile": data.mobile,
            "studymode": data.studymode,
            "center": data.center,
            "class": data.classmode,
            "stream": data.stream
        });

        console.log(`Data inserted successfully with ID: ${result.insertedId}`);
        return { success: true, insertedId: result.insertedId };
    } catch (error) {
        console.error("Error inserting data:", error);
        return { success: false, message: 'Error inserting data' };
    }
}

module.exports = { insert };
