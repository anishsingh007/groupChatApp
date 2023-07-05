const express = require('express');
const path = require ('path')
const bodyParser = require('body-parser')
var cors = require('cors')
const sequelize = require('./util/database')
const { authenticate } = require('./middleware/auth');

//models
const User = require('./models/user')
const chatmsg = require('./models/chatmsg')

const app = express();


app.use(bodyParser.json());//used for parsing data from body
app.use(express.static(path.join(__dirname,'public')));
app.use(cors())



const userRoutes = require('./routes/user')
const chatRoutes = require('./routes/chat')

app.use(userRoutes)
 app.use(authenticate)
app.use(chatRoutes)



chatmsg.belongsTo(User);
User.hasMany(chatmsg);

sequelize.sync({alter:true}).then(() => {
    app.listen(3000);
    console.log('success');
})
.catch(err => {
    console.log(err);
})
