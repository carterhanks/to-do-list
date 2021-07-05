const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../public')));

app.use("/styles.css", express.static(path.join(__dirname, '/public/styles.css')));

app.get('/', function(req, res) {

    res.sendFile( path.join(__dirname, '../index.html') );

});

const port = process.env.PORT || 5050;

app.listen(port, function() {
    console.log(`Server Slappin on ${port}!`);
});