const express = require( 'express' ),
    app = express()

app.use( express.json() )

const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(process.env.PORT || 3000 )
