


// let allUsers = [];
// function addUser() {
//     let user = {
//         studentname: document.getElementById("studentname").value,
//         roll: document.getElementById("roll").value,


//     };
//     allUsers.push(user)
//     console.log(allUsers);
//     displayUsers();
//     clearForm();
// }
// function clearForm() {
//     document.getElementById("studentname").value = "";
//     document.getElementById("roll").value = "";
// }
// function displayUsers() {
//     let tbody = document.querySelector("tbody");
//     tbody.innerHTML = " ";
//     allUsers.forEach(function (user) {
//         let mytr = document.createElement("tr");
//         mytr.innerHTML = `<td> ${user.studentname}</td>
//        <td> ${user.roll}</td>
//        <td><button>edit</button></td>
//        <td> <button>delete</button></td>
//        `;
//         tbody.append(mytr)
//     });
// }






let allUsers = [];
let editIndex = 1
function addUser() {
    let user = {
        studentname: document.getElementById("studentname").value,
        roll: document.getElementById("roll").value,


    };
    if (user.studentname === "") return;
    if (editIndex === 1) {
        allUsers.push(user)
    }
    else {
        allUsers[editIndex] = user;
        editIndex = 1;
    }
    displayUsers();
    clearForm();
}
function clearForm() {
    document.getElementById("studentname").value = "";
    document.getElementById("roll").value = "";
}
function displayUsers() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    allUsers.forEach(function (user, index) {
        let mytr = document.createElement("tr");
        mytr.innerHTML = `<td> ${user.studentname}</td>
       <td> ${user.roll}</td>
         <td><button onclick="editUser(${index})">Edit</button></td>
            <td><button onclick="deleteUser(${index})">Delete</button></td>
       `;
        tbody.append(mytr)
    });
}

function editUser(index) {
    document.getElementById("studentname").value = allUsers[index].studentname;
    document.getElementById("roll").value = allUsers[index].roll;
    editIndex = index;
}


// function deleteUser(index) {
//     allUsers.splice(index, 1);
//     displayUsers();
// }
















