let allUsers=[];
let editIndex=-1;
function addRow()
{
    let user={
        table:document.getElementById("table").value, 
    };
    if(user.table === "") return;
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
    document.getElementById("table").value="";
}

function displayUsers()
{
     let tbody=document.querySelector("tbody");
     tbody.innerHTML="";
    allUsers.forEach(function(user, index){
        
        let mytr=document.createElement("tr");
        mytr.innerHTML=`<td>${user.table}</td>
        <td><button onclick="editUser(${index})">Edit</button></td>
            <td><button onclick="deleteUser(${index})">Delete</button></td>`;

           tbody.append(mytr);
    });
}

function editUser(index) {
    document.getElementById("table").value = allUsers[index].table;
    editIndex = index;
}

function deleteUser(index) {
    allUsers.splice(index, 1);
    displayUsers();
}
