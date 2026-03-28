let allUsers = [];
let editIndex = -1;

function addUser() {
    let user = {
        input: document.getElementById("input").value
    };

    if (user.input === "") return;

    if (editIndex === -1) {
        allUsers.push(user);
    } else {
        allUsers[editIndex] = user;
        editIndex = -1;
    }

    console.log(allUsers);

    displayUsers();
    clearForm();
}

function clearForm() {
    document.getElementById("input").value = "";
}

function displayUsers() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    allUsers.forEach(function (user, index) {
        let mytr = document.createElement("tr");
        mytr.innerHTML = `
            <td>${user.input}</td>
            <td><button onclick="editUser(${index})">Edit</button></td>
            <td><button onclick="deleteUser(${index})">Delete</button></td>
        `;
        tbody.append(mytr);
    });
}

function editUser(index) {
    document.getElementById("input").value = allUsers[index].input;
    editIndex = index;
}

function deleteUser(index) {
    allUsers.splice(index, 1);
    displayUsers();
}