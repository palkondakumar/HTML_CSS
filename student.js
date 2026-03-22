


let allUsers = [];
function addUser() {
    let user = {
        studentname: document.getElementById("studentname").value,
        roll: document.getElementById("roll").value,


    };
    allUsers.push(user)
    console.log(allUsers);
    displayUsers();
    clearForm();
}
function clearForm() {
    document.getElementById("studentname").value = "";
    document.getElementById("roll").value = "";
}
function displayUsers() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = " ";
    allUsers.forEach(function (user) {
        let mytr = document.createElement("tr");
        mytr.innerHTML = `<td> ${user.studentname}</td>
       <td> ${user.roll}</td>
       <td><button>edit</button></td>
       <td> <button>delete</button></td>
       `;
        tbody.append(mytr)
    });
}














