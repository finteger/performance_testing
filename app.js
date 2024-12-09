const express = require('express');
const app = express();
const PORT = 3000;


app.get('/api/load-testing', (req, res) =>{ 
    //Throttling
    const delay = 2000;

    setTimeout(() =>{
        res.json({message: `Request processed: ${req.body}`});
    }, delay);

});


app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
});