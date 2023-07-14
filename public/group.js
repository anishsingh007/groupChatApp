const url = "http://localhost:3000";
const token = localStorage.getItem("token");
const headers = { headers: { Authorization: token } };

////CREATE GROUP BUTTON LOGIC/////
// Get the modal
var modal = document.getElementById("CreateGroup");

// Get the button that opens the modal
var openModal = document.getElementById("creategroup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
openModal.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
// Function to handle group creation
async function handleGroupCreation() {
    const token = localStorage.getItem('token')
  console.log(token);
  const groupNameInput = document.getElementById("grpName");
  const descriptionInput = document.getElementById("grpDesc");

  const groupName = groupNameInput.value;
  const description = descriptionInput.value;
  const groupDetails ={
    groupName,
    description
  }
  
  return new Promise((resolve, reject) => {
    axios.post(`${url}/creategroup`, groupDetails, headers)
      .then(response => {
      //  console.log(response.data)// Assuming the response contains relevant information
        alert(response.data.message); // Show alert message
        resolve(response.data); // Resolve the promise with the response data
      })
      .catch(error => {
        console.error('Error creating group:', error);
        reject(error); // Reject the promise with the error
      });
  });
  // Call the createGroup function to store group details in the database
//   createGroup(groupName, description, admin);
  
 // Clear input fields
  groupNameInput.value = "";
  descriptionInput.value = "";
}

// Add event listener to the "Create Group" button
const createGroupButton = document.getElementById("creategroupbutton");
createGroupButton.addEventListener("click", handleGroupCreation);

////CREATE GROUP BUTTON LOGIC///////////////////////////////////////////////////////////////////////////////////////////////////////////////

////JOINED GROUPS BUTTON LOGIC////
// Get the modal
var modal1 = document.getElementById("JoinedGroup");

// Get the button that opens the modal
var openModal1 = document.getElementById("joinedGroup");

// Get the <span> element that closes the modal
var span1= document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
openModal1.onclick = function() {
  modal1.style.display = "block";
  fetchGroups();
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
} 
// Function to fetch Joined group
async function fetchGroups() {
  try {
    const grp_info = await axios.get(`${url}/fetchgroups`, headers);

    grp_info.data.group_info.forEach((group) => {
      const button = document.createElement("button");
      button.setAttribute("onclick", "callGrp(event);");
      button.id = group.id;
      button.innerHTML = group.groupName;

      const groupList = document.getElementById("groupList");
      groupList.appendChild(button);
    });
  } catch (err) {
    console.log(err, "in Dom to load group information");
  }
};



////JOINED GROUPS BUTTON LOGIC/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
