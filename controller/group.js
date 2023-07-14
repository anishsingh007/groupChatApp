// group.js

const Group = require("../models/group"); // Import the Sequelize model
const GroupMember = require("../models/groupMembers");

// Function to store group details in the database
async function createGroup(req, res) {
  const { groupName, description } = req.body;
  
  console.log(groupName, description);
  const admin = req.user.id;
  try {
    const createGroup = await Group.create({
      groupName,
      description,
      admin,
    });

    // {
    //   var members = [{ userId: req.user.id, groupId: createGroup.id }];
     
    //     var obj = {
    //       userId: req.user.id,
    //       groupId: createGroup.id,
    //     };
    //     members.push(obj);
      
    // }
    var members = [{ userId: req.user.id, groupId: createGroup.id }]
    GroupMember.bulkCreate(members, { returning: true }).then((result) => {
      res
        .status(201)
        .json({ success: true,  message: "Group created successfully" });
    });
  } catch (err) {
    console.log(err, " in Creategroup");
  }
};
//////////fetch Group

const fetchGroup = async (req, res, next) => {
  try {
    console.log(req.user.id);                            //taking the current user ID to search in groupMembers Table to see how many groups he joined
    const grp_id_list = await GroupMember.findAll({
      where: { userId: req.user.id },
    });

    const result = [];                            //pushing all the group ID which we get in an array
    grp_id_list.forEach((element) => {
      result.push(element.groupId);
    });

    await Group.findAll({ where: { id: result } }).then((result) => { // now searching for the groups for each group ID  in array
          res.status(200).json({ success: true, group_info: result }); // now sending the results in status as group info 
    });
  } catch (err) {
    console.log(err, "in getGroupsOnMainPage ");
  }
};


module.exports = {
  createGroup,fetchGroup
};
