document.getElementById("loginButton").addEventListener("click", logIn);

function logIn() {
    const username = document.getElementById("usernameInput");
    const password = document.getElementById("passwordInput");
    let allusers = JSON.parse(localStorage.getItem("users"));
    const user = allusers.find((data) => data.username === username.value && data.password === password.value);

    if (user) {
        if (user.role === "admin") {
            alert("Welcome, " + user.username);
            localStorage.setItem("currentUser", user.username);
            window.location.href = "../html/adminPanel.html";
        } else {
            alert("Welcome, " + user.username);
            localStorage.setItem("currentUser", user.username);
            window.location.href = "../html/userPanel.html";
        }
    }
    else {
        alert("Wrong username or password!");
    }
}