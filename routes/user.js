const express = require("express");
const path = require("path");
const router = express.Router();


router.get('/',(req,res)=>{
    res.redirect('/signup')

})
router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/signup.html'))

})

router.post('/user-signup', (req, res) => {
    // Retrieve the user signup data from the request body
    const { name, email, phone, password} = req.body;
  

    // Perform any necessary validation or processing
  
    // Example: Save the user data to a database
    // ...
  
    // Send a response back to the client
    res.status(200).json({ message: 'User signup successful' });
  });



module.exports=router