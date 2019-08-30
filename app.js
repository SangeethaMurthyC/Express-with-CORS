let express = require('express');

let app = express();

let cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    console.log('Me')
    // res.json({msg: 'This is CORS-enabled for all origins!'})
    res.send('siutfyudtrfyudt')
});

app.listen(8055,function () {
    console.log('CORS-enabled web server listening on port 8055')
  });