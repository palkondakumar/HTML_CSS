


let allUsers = [];
function addUser() {
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    allUsers.push(user);
    console.log(allUsers)
    displayUsers();
    clearForm();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

}

function displayUsers() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    allUsers.forEach(function (user) {

        let mytr = document.createElement("tr");
        mytr.innerHTML = `<td>${user.name}</td>
                         <td>${user.email}</td>
                         <td>${user.password}</td>
                       <td><button>edit</button></td>
                      <td><button>delete</button></td>`;
        tbody.append(mytr);
    });
}