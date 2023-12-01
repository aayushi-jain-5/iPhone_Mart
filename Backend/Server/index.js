// server.js (or index.js)

const express = require('express');
const path=require("path");
const bodyParser = require('body-parser');
const signupRouter = require('./api/signup');
const loginRouter = require('./api/login');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Use the signup and login routes
app.use('/api', signupRouter);
app.use('/api', loginRouter);

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
