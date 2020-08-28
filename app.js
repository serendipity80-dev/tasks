const express = require('express');
const app = express();

app.use(express.static('/home/dci/Documents/Tasks/Grid_task'));

const port = 2929;
app.listen(port, function(){
    console.log(`Server is listening to the port: ${port}`);
});