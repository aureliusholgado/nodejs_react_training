const jwt = require('jsonwebtoken')
// const Users = require

const auth = async (req, res, next) => {

    try{
        const token = req.header('Authorization').replace('Bearer', '')
        console.log(token)
        const decode = await jwt.verify(token, process.env.JWT_KEY)
        const user = await Users.findOne({_id: decode._id, 'tokens.token': token})
        if(!user){
            throw new Error()
        }
        req.token = token;
        req.user = user;
        next()
    }catch(e){
        res.status(400).send({error:"authentication X"})
    }

}