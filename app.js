const express = require('express');
const path = require ('path')
const bodyParser = require('body-parser')
var cors = require('cors')
const sequelize = require('./util/database')


//models
const User = require('./models/user')
const Group =require('./models/group')
const GroupMembers=require('./models/groupMembers')

const app = express();


app.use(bodyParser.json());//used for parsing data from body
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());



const userRoutes = require('./routes/user')
const groupRoutes= require('./routes/groups')


app.use(userRoutes)
app.use(groupRoutes)




Group.belongsToMany(User, { through: "GroupMembers" });
User.belongsToMany(Group, { through: "GroupMembers" });


sequelize.sync({alter:true}).then(() => {
    app.listen(3000);
    console.log('success');
})
.catch(err => {
    console.log(err);
})
//{force:true}