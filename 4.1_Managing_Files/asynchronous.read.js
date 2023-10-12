const {convertCsv} = require ("./csv.parse");
const {readFile} = require("fs");

// readFile(1st Arg, 2ndArg, 3rd Arg): these 3 must be present, otherwise, you will have errors
    // 1st Arg = Name/Path of the file to read
    // 2nd Arg = How the file was encoded in order to determine how to decode
    // 3rd Arg = Callback function which dictates what to do with the data -> always has 2 arguments: err then data

readFile("./data/pulitzer-circulation-data.csv", "utf8", (err, data) => {
    if (err) console.log(err)
    const vals = convertCsv(data)
    console.table(vals);
})