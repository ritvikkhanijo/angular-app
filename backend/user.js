// import (in Node, with 'require') Express (we installed it with npm) and make it a const
const express = require('express');

const router = express.Router();

// set the endpoint of NodeJS
router.post('/signup', (req,res,next) => {
    res.status(200).json(
        {message: 'Response from NodeJS'}
        )

});

// export the router
module.exports = router;