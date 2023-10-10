// Bring in the express server and create the application
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo');
let errorHelper = require('./helpers/errorHelpers');

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
            // next() is express' default error handler which has a default error message (see bottom app.use)
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

router.put('/:id', function (req, res, next) {
    
    // LOGIC: check first if a pie is existing, then perform update()
    pieRepo.getById(
        
        // getById Arg 1
        req.params.id, 
        
        // getById Arg 2 (data here is now the retrieved pie)
        function(data){

            // if a pie is retrieved, update function will work
            if(data){
                pieRepo.update(

                    // update Arg 1
                    req.body, 

                    // update Arg 2
                    req.params.id, 

                    // update Arg 3
                    function (data) {
                        res.status(200).json({
                            "status": 200,
                            "statusText": "OK",
                            "message": "Pie " + req.params.id + " updated",
                            "data": data
                        })
                    },

                    // update Arg 4
                    function(err){
                        next(err)
                    }

                )

            // if no pie is retrieved, a 404 error handler is thrown
            }else{

                // 404 error handler
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

        // getById Arg 3
        function(err){
            next(err)
        }

    )
})

// NOTE: PUT requires ALL properties to be edited, whereas PATCH allows only some properties to be edited
router.patch('/:id', function (req, res, next) {
    
    // LOGIC: check first if a pie is existing, then perform update()
    pieRepo.getById(
        
        // getById Arg 1
        req.params.id, 
        
        // getById Arg 2 (data here is now the retrieved pie)
        function(data){

            // if a pie is retrieved, update function will work
            if(data){
                pieRepo.update(

                    // update Arg 1
                    req.body, 

                    // update Arg 2
                    req.params.id, 

                    // update Arg 3
                    function (data) {
                        res.status(200).json({
                            "status": 200,
                            "statusText": "OK",
                            "message": "Pie " + req.params.id + " updated",
                            "data": data
                        })
                    },

                    // update Arg 4
                    function(err){
                        next(err)
                    }

                )

            // if no pie is retrieved, a 404 error handler is thrown
            }else{

                // 404 error handler
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

        // getById Arg 3
        function(err){
            next(err)
        }

    )
})

router.delete('/:id', function(req, res, next) {

    // Same logic as above
    pieRepo.getById(

        // getById Arg 1
        req.params.id,

        // getById Arg 2
        function(data){
            if(data){
                pieRepo.delete(

                    // delete Arg 1
                    req.params.id, 
    
                    // delete Arg 2
                    function (data) {
                        res.status(200).json({
                            "status": 200,
                            "statusText": "OK",
                            "message": "Pie " + req.params.id + " is deleted",
                            "data": data
                        })
                    },
    
                    // delete Arg 3
                    function(err){
                        next(err)
                    }
    
                )
            }else{
                // 404 error handler
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
        
        // getById Arg 3
        function(err){
            next(err)
        }

    )

})

// IMPORTANT: MAKE SURE THAT THIS IS ALWAYS AT THE BOTTOM!!!!!

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

// ERROR HANDLERS

    // This app.use for exception handling is placed last since app.use is invoked by order of placement, and we do now want these to be invoked first, but as a last resort
    // What happened here is that we created our custom middleware for express' default next() exception handler
    // When next() function is triggered by the error, it will look for these specific middlewares and pass the 'err' argument to it according to which is most appropriate
    // We placed the custom errorHandler functions in helpers/errorHelpers.js in order to separate them from the routes; not how it is exported

    // Configure exception logger to console
    // app.use(errorHelper.logErrorsToConsole);

    // Inpute excpetion and error logs in logs/log.txt file
    app.use(errorHelper.logErrorsToFile);

    // Configure client error handler
    app.use(errorHelper.clientErrorHandler);

    // Configure catch-all exception middleware last
    app.use(errorHelper.errorHandler);

// Create server to listen on port 5000
var server = app.listen(5000, () => {
    console.log("Server is running on port 5000")
})