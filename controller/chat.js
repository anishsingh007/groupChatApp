const message = require('../models/chatmsg')

const addmsg = async (req,res)=>{
    try {
        const { chat } = req.body;
        console.log(chat);
       
        const userId = req.user.id;// i am getting this through authemntication middleware where i am saving
        //the decoded user object in req.user
    console.log(userId);
    
        // saving to table called message)
            await message.create({message:chat,userId:userId})


        // Send a response back to the client
        res.status(200).json({ message: 'Chat message received successfully' });
      } catch (error) {
        // Handle any errors that occur during the processing
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    };




module.exports={addmsg,}