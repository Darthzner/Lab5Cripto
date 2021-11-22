const express = require('express');

const cors = require('cors');
const pool = require('./database');
const port = 3000



const app = express();
app.set('view engine', 'ejs');
app.set('views');



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/submit', function(req,res) {
    res.render('front')
});



app.listen(port, ()=> {
    
    console.log(`Server running at http://localhost:${port}`);
    
    
});

module.exports = app;