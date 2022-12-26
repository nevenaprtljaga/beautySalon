let users = [{
    "username" : "nevena",
    "password" : "neve",
    "role" : "admin"
},
{
    "username" : "clarivate",
    "password" : "clar",
    "role" : "user"
}];

document.getElementById("loginButton").addEventListener("click", logIn);  

function logIn(){
    const username = document.getElementById("usernameInput");
    const password = document.getElementById("passwordInput");

    const user= users.find((data) => data.username === username.value && data.password === password.value);
        if(user){
            if(user.role === "admin"){
                alert("Welcome, " + user.username);
                window.location.href="../html/adminPanel.html";
            }else{
                alert("Welcome, " + user.username);
                window.location.href="../html/userPanel.html";
            }
        }
        else{
            alert("Wrong username or password!");
        }
}


document.getElementById("registerButton").addEventListener("click", logIn);  