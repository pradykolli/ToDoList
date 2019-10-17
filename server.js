 const express = require("express");
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");
 const items = require("./routes/api/items");
 const app = express()
 const path = require('path');
 //Bodyparser middleware

 app.use(bodyParser.json());

 // Setting up db

 const db = require('./config/keys').mongoURI;

 //Connect to db

 mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
// mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
// Use routes
app.use('/api/items',items);


// Serve static assets if in prod
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build' , 'index.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server started running on port ${port}`));