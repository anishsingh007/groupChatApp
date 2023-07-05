async function send(e) {
  try {
    e.preventDefault();
    //console.log(e.target.chat.value);
    const chatmsg = {
      chat:document.getElementById('chat').value
    }
    console.log(localStorage.getItem('token'));
    const token = localStorage.getItem('token')
    console.log(token);
    await axios.post('http://localhost:3000/chat',chatmsg,{
      headers: { 'Authorization': token}, })
  } catch (err) {
    document.body.innerHTML += `<div style='color:red'>${err} <div>`;
  }
}
