const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port',4000);
app.set('view engine','ejs'); 

//middlewares

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views/prueba_mty.html'))
});

//static files

//feedback
app.listen(app.get('port')),() => {
    console.log('Server on port',app.get('port'));
}