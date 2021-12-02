const express = require('express');

const cors = require('cors');
const pool = require('./database');
const port = 3000



const app = express();
app.set('view engine', 'ejs');
app.set('views');
app.set('trust proxy',true);


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', async function(req,res) {
    const data = await pool.query('select pw, so, ipv6addr from logs');
    console.log(data.rows[0]);
    res.render('front',{
        data : data.rows
    })
});

app.get('/submitdat/:os', function(req,res){
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    console.log("IP : " ,ip);
    console.log(req.params);
    pool.query('insert into logs(so,ipv6addr) values($1,$2)',[req.params.os,ip]);
    res.status(200).json({
        success : 'Ok'
    });
})


app.listen(port, ()=> {
    
    console.log(`Server running at http://localhost:${port}`);
    
    
});

module.exports = app;