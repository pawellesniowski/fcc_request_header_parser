const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const os = require('os');
var useragent = require('express-useragent');

const app = express();
const port = process.env.PORT || 5000; 

app.use(cors());
app.use(useragent.express());

app.get('/api/whoami', (req, res, next)=>{
    var lan = req.acceptsLanguages();
    // var soft = os.type() + "; " + parseInt(os.release()) + "; " + os.platform()+ "; " + os.arch();
    // var soft = req.get('user-agent');
    // var soft = req.headers['user-agent']; 
    var soft = req.useragent.os;
    var soft2 = req.useragent.browser;
    
    var ip = req.ip;

    res.json({ipadress: ip, language: lan[0], software: soft, browser: soft2});

});

app.listen(port, function(){
    console.log("app is running on port "+port);
});

