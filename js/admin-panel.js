// console.log(localStorage.getItem("users"));

// console.log(localStorage.getItem("salons"));

let data = JSON.parse(localStorage.getItem("salons"));
var tableData = data.map(salon => (
    `
      <tr>
        <td>${salon.name}</td>
        <td>${salon.address}</td>
        <td>${JSON.stringify(salon.treatments)}</td>
      </tr>
    `
  )).join('');

var tbody = document.querySelector('#body');
tbody.innerHTML = tableData;
//add salon
document.getElementById("addSalonButton").addEventListener("click", addSalon); 

function addSalon(){
    let salonName = document.getElementById("salonNameInput").value;
    let salonAddress = document.getElementById("salonAddressInput").value;

    let existingSalons = JSON.parse(localStorage.getItem("salons")) || [];

    let newSalon = {
        "name": salonName,
        "address" : salonAddress
    };

    if(!existingUsers.some(user => user["username"] === username)){
        existingUsers.push(newUser);
        console.log("account created");
        localStorage.setItem("users", JSON.stringify(existingUsers));
        console.log(localStorage.getItem("users"));
        alert("Successful! You can now log in.");
        window.location.href="../html/home.html";
    }else{
        alert("Username exists in database.");
        console.log(localStorage.getItem("users"));
    }
}


//delete usera
// delete appointmenta
