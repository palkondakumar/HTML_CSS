


let allUsers=[];
let editIndex=-1;
function addUser()
{
    let user={
        name:document.getElementById("name").value, 
           email:document.getElementById("email").value,
              password:document.getElementById("password").value
    };
    if(user.note === "") return;
    if(editIndex === -1){

    
    allUsers.push(user)
    }
    else{
        allUsers[editIndex] = user;
        editIndex = -1;
    }
    console.log(allUsers);
    displayUsers();
    clearForm();
}

function clearForm()
{
    document.getElementById("name").value="";
     document.getElementById("email").value="";
      document.getElementById("password").value="";
}

function displayUsers()
{
     let tbody=document.querySelector("tbody");
     tbody.innerHTML="";
    allUsers.forEach(function(user, index){
        
        let mytr=document.createElement("tr");
        mytr.innerHTML=`<td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td><button onclick="editUser(${index})">Edit</button></td>
            <td><button onclick="deleteUser(${index})">Delete</button></td>`;

           tbody.append(mytr);
    });
}

function editUser(index) {
    document.getElementById("name").value = allUsers[index].name;
     document.getElementById("email").value = allUsers[index].email;
      document.getElementById("password").value = allUsers[index].password;

    editIndex = index;
}

function deleteUser(index) {
    allUsers.splice(index, 1);
    displayUsers();
}
