const express = require('express');
const app = express();

app.use(express.static('/home/dci/Documents/simple-website'));

const port = 2993;
app.listen(port, function(){
    console.log(`Server is listening to the port: ${port}`);
});