const express = require("express");
cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "authors_db"

///// MIDDLEWARE \\\\\
// make sure these lines are above any app.get or app.post code blocks
app.use(cors(), express.json(), express.urlencoded({extended:true}));

///// database connection - passes DB name\\\\\
require('./config/mongoose.config')(DB)
///// connection to routes \\\\\
require('./routes/author.routes')(app)

app.listen( PORT, () => console.log(`*** 🦄 server started on port:${PORT} 🦄 *** `) );