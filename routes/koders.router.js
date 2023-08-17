const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        message: 'get Koders'
    })
})

module.exports = router;