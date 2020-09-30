// import (in Node, with 'require') Express (we installed it with npm) and make it a const
const express = require('express');

const router = express.Router();

// import the user model(s) created in ./models/user
const User = require('./models/user');
// import bcryptjs (a library that helps hash passwords)
const bcrypt = require('bcryptjs');
// import jsonwebtoken (JSON web token implementation)
const jwt = require('jsonwebtoken');


// matches with createUser method in user.service.ts
router.post('/signup', (req,res,next) =>{
    bcrypt.hash(req.body.password, 10)
    .then(hash =>{
        const user = new User({
            email: req.body.email,
            password: hash,
            isAdmin: 0
        });
        user.save()
        .then(result =>{
            res.status(200).json({
                message: 'User created'
            });
        })
        .catch(error => {
            console.log(error);
        });
    });
})

// matches with loginUser method in user.service.ts
router.post('/login', (req,res,next) =>{
    let fetcheduser;
    User.findOne({email: req.body.email})
    .then(user =>{
        fetcheduser = user;
        if(!user){
            return res.status(404).json({message: 'Auth failed'});
        }
        return bcrypt.compare(req.body.password, user.password)
    })
        .then(result => {
            if(!result){
                return res.status(404).json({message: 'Auth failed'});
            }
            const administrator = fetcheduser.isAdmin;
            const token = jwt.sign({
                email: fetcheduser.email,
                userId: fetcheduser._id
                },
                'secret-long', {expiresIn: '1h'});
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                admin: administrator
            });
        })
        .catch(err =>{
            console.log(err);
        });
});

// export the router
module.exports = router;