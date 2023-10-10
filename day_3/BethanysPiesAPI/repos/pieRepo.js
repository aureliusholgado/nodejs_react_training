let fs = require('fs')
const FILE_NAME = "./assets/pies.json"

let pieRepo = {
    
    // get function
    get: function (resolve, reject) {
        fs.readFile(FILE_NAME, function(err, data){
            if(err){
                reject(err)
            }else{
                resolve(JSON.parse(data))
            }
        })
    },
    
    // getBtId function
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if(err){
                reject(err)
            }else{
                // find: pass in each pie individually -> check which pie's ID is equal to the ID that is passed into the getById function (1st argument) -> return that pie (may be null if no match)
                // the parameter that the resolve() argument/function will get is the /:id
                let pie = JSON.parse(data).find(p => p.id == id)
                resolve(pie)
            }
        })
    },
    
    // search function
    search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            }else{
                let pies = JSON.parse(data)
                if(searchObject){
                    pies = pies.filter(
                        p => (searchObject.id ? p.id == searchObject.id : true) && (searchObject.name? p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 : true)
                    )
                }
                resolve(pies)
            }
        })
    },

    // insert function
    insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if(err){
                reject(err);
            }else{
                let pies = JSON.parse(data)
                pies.push(newData);
                fs.writeFile(FILE_NAME, JSON.stringify(pies), function(err){
                    if(err){
                        reject(err)
                    }else{
                        resolve(newData)
                    }
                })
            }
        })
    }

};

module.exports = pieRepo