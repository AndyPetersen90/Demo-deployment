const express = require('express');
const path = require('path'); //this is a default package for accessing file paths.

const app = express();

//lets build the path to our front end files so Heroku can access them

//Endpoints
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})



const port = process.env.PORT || 4005 //we do this because Heroku will provide a port number for their servers.

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

