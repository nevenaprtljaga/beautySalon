roleNamesDrop = document.getElementById("role-names");

for (let i = 0; i < roleNames.length; ++i) {
    roleNamesDrop[roleNamesDrop.length] = new Option(roleNames[i], roleNames[i]);
}

document.getElementById("registerButton").addEventListener("click", register);


function register() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    const roleValue = roleNamesDrop.value;

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    let newUser = {
        "id": existingUsers.length + 0,
        "username": username,
        "password": password,
        "role": roleValue
    };

    if (!existingUsers.some(user => user["username"] === username)) {
        existingUsers.push(newUser);
        console.log("account created");
        localStorage.setItem("users", JSON.stringify(existingUsers));
        console.log(localStorage.getItem("users"));
        alert("Successful! You can now log in.");
        window.location.href = "../html/home.html";
    } else {
        alert("Username exists in database.");
        console.log(localStorage.getItem("users"));
    }


}

