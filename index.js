const express = require('express');
const kodersRouter = require('./routes/koders.router')
const mentoresKodemia = require('./routes/mentores.router');
const generationsKodemia = require('./routes/generations.router')
const app = express();

app.use( express.json() );
app.use('/koders', kodersRouter);
app.use('/mentores', mentoresKodemia);
app.use('/generations', generationsKodemia);

// endpoint 
// GET /
app.get('/', ( req, res)=>{
    res.json({
        messsage: 'Kodemia APIv27'
    })
})

app.listen( 3000, ()=>{
    console.log('Server listening on port 8080');
})

