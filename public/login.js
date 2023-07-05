async function login(e) {
    e.preventDefault();
    console.log(e.target.email.value);
  
    const loginDetails = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    console.log(loginDetails);
  
    await axios.post("http://localhost:3000/user-login", loginDetails)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const token = response.data.token; // Assign the token to a variable
          localStorage.setItem('token', token);
          console.log(token);
          alert(response.data.message);
           window.location.href='/chat.html'
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        document.body.innerHTML += `<div style='color:red;'>${err.message}<div>`;
      });
  }