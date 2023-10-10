// Bring in the express server and create the application
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo')

// Use the express Router object
let router = express.Router();

// Configure middleware to support JSON data parsing in request object
app.use(express.json())

// let pies = pieRepo.get();

// NOTE: Practice wrapping your data into a JSON object with the following data
// {
//     "status": 200,
//     "statusText": "OK",
//     "message": "All pies retrieved",
//     "data": [
//         { "id": 1, "name": "Apple" },
//         { "id": 2, "name": "Cherry" },
//         { "id": 3, "name": "Peach" }
//     ]
// }

// Create GET to return a list of all pies
router.get('/', function (req, res, next) {
    // res.status(206).send(pies) // the default status code is 200

    // the 1st function is the 1st argument (resolve), whereas the 2nd function is the 2nd argument (reject) in pieRepo.js
    pieRepo.get(
        
        // 1st Argument (resolve)
        function (data) {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved",
            "data": data
        });
        }, 
        
        // 2nd Argument(reject)
        function (err) {
            next(err)
        }
    )

});


router.get('/search', function (req, res, next) {
    
    let searchObject = {
        "id": req.query.id,
        "name": req.query.name
    }

    pieRepo.search(
        
        // 1st Argument (searchObject)
        searchObject, 
    
        // 2nd Argument (resolve)
        function (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "All pies retrieved",
                "data": data
            })
        },

        // 3rd Argument (reject)
        function (err) {
            next(err);
        }

    )
})

router.get('/:id', function (req, res, next) {
    pieRepo.getById(
        
        // 1st Argument (id)
        req.params.id, 
        
        // 2nd Argument (resolve)
        function (data) {
            if (data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "All pies retrieved",
                    "data": data
                });
            }else{
                res.status(404).json({
                    "status": 404,
                    "statusText": "Not Found",
                    "message": "The pie" + req.params.id + "could not be found.",
                    "error": {
                        "code": "NOT_FOUND",
                        "message": "The pie" + req.params.id + "could not be found."
                    }
                })
            }
        }, 

        // 3rd Argument (reject)
        function(err){
            next(err)
        }

    )
})

router.post('/', function (req, res, next) {
    pieRepo.insert(

        // 1st Argument (newData)
        req.body,

        // 2nd Argument (resolve)
        function (data) {
            res.status(201).json({
                "status": 201, // status code 201 means that a data is created
                "statusText": "Created",
                "message": "New Pie Added.",
                "data": data
            })
        },
        
        // 3rd Argument (reject)
        function (err) {
            next(err)
        }

    )
})


// IMPORTANT: MAKE SURE THAT THIS IS ALWAYS AT THE BOTTOM!!!!!

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

// Create server to listen on port 5000
var server = app.listen(5000, () => {
    console.log("Server is running on port 5000")
})