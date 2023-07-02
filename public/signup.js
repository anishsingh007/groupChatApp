

async function signup(e){
    try{
        e.preventDefault();
        console.log(e.target.name.value);

       // const confirmPassword = document.getElementById('confirmPassword').value;
        // const password = document.getElementById('password').value;

        // if(password.length < 8 || password !==confirmPassword){
        //     throw new Error('Invalid password');
        // }
      
        const signupDetails={
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: document.getElementById('password').value

        }
        

        await axios.post('http://localhost:3000/user-signup',signupDetails);

    }catch(err){
        document.body.innerHTML+=`<div style='color:red'>${err} <div>`;

    }
}