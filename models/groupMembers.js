const Sequelize = require("sequelize");

const users = require('./user')
const groups = require('./group');
const database = require("../util/database");

const GroupMembers = database.define('groupMembers', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: users,
      key: 'id',
    },
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: groups,
      key: 'id',
    },
  },
}, {
  
});

module.exports = GroupMembers;