const express = require('express');
const path = require ('path')
const bodyParser = require('body-parser')
var cors = require('cors')
const sequelize = require('./util/database')

//models
//const User = require('./models/users')

const app = express();


app.use(bodyParser.json());//used for parsing data from body
app.use(express.static(path.join(__dirname,'public')));
app.use(cors())
console.log();


const userRoutes = require('./routes/user')

app.use(userRoutes)

sequelize.sync().then(() => {
    app.listen(3000);
    console.log('success');
})
.catch(err => {
    console.log(err);
})
