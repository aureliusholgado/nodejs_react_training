const request = require('request')

let apiHelper = {
    callApi: function (url) {
        return new Promise((resolve, reject) => {
            
            request(
                
                // Arg 1: takes in the url parameter
                url, 

                // Arg 2: Signifies that we are looking for a JSON object
                { json:true }, 

                // Arg 3: function to take place
                (err, res, body) => {
                    if (err) {
                        reject(err)
                    }else{
                        resolve(body)
                    }
                }

            )

        })
    }
}

module.exports = apiHelper;