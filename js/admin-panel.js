//show data from salons
let data = JSON.parse(localStorage.getItem("salons"));

var tbody = document.getElementById('body1');

for (let i = 0; i < data.length; i++) {
    let salon1 = data[i];
    listTre = [];
    for (let j = 0; j < salon1.treatments.length; j++) {
        listTre += salon1.treatments[j].name + ": " + salon1.treatments[j].price + "RSD; ";
    }
    tr = "<tr>";
    tr = `
        <tr>
          <td>${salon1.name}</td>
          <td>${salon1.address}</td>
          <td>${listTre}</td>
        </tr>
    `;
    tbody.innerHTML += tr;

}

//show data from users
let data2 = JSON.parse(localStorage.getItem("users"));
var tableData = data2.map(user => (
    `
      <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.role}</td>
      </tr>
    `
)).join('');

var tbody = document.querySelector('#body2');
tbody.innerHTML = tableData;

//show data from appointments
let data3 = JSON.parse(localStorage.getItem("appointments"));
console.log(data3);
var tableData = data3.map(appointment => (
    `
      <tr>
        <td>${appointment.id}</td>
        <td>${appointment.username}</td>
        <td>${appointment.salonName}</td>
        <td>${appointment.treatmentName}</td>
        <td>${appointment.date}</td>
        <td>${appointment.time}</td>
      </tr>
    `
)).join('');

var tbody = document.querySelector('#body3');
tbody.innerHTML = tableData;

//add salon
document.getElementById("addSalonButton").addEventListener("click", addSalon);

function addSalon() {
    let salonName = document.getElementById("salonNameInput").value;
    let salonAddress = document.getElementById("salonAddressInput").value;
    let salonTreatments = document.getElementById("salonTreatmentsInput").value;
    let existingSalons = JSON.parse(localStorage.getItem("salons")) || [];
    let arrTreatments = salonTreatments.split(",");
    let newSalon = {
        name: salonName,
        address: salonAddress,
        treatments: []
    };

    for (let i = 0; i < arrTreatments.length; i += 2) {
        newSalon.treatments.push({ name: arrTreatments[i], price: arrTreatments[i + 1] });
    }

    if (!existingSalons.some(salon => salon["name"] === salonName)) {
        existingSalons.push(newSalon);
        localStorage.setItem("salons", JSON.stringify(existingSalons));
        window.location.reload();
    } else {
        alert("Salon name exists in database.");
    }
}


//update user role

//uneses u polje id i kliknes dugme i promeni se rola
document.getElementById("changeRoleButton").addEventListener("click", changeRole);

function changeRole() {
    let id = document.getElementById("inputIdUser").value;
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    let foundIndex = existingUsers.findIndex(user => user["id"] == id)
    if (foundIndex >= 0) {
        if (existingUsers[foundIndex].role == roleNames[0]) {
            existingUsers[foundIndex].role = roleNames[1];
        } else if (existingUsers[foundIndex].role == roleNames[1]) {
            existingUsers[foundIndex].role = roleNames[0];
        }

        localStorage.setItem("users", JSON.stringify(existingUsers));
        console.log(localStorage.getItem("users"));
        window.location.reload();

    } else {
        alert("No user with id = " + id);

    }

}

//delete appointment by id
document.getElementById("deleteAppoButton").addEventListener("click", deleteAppointment);

function deleteAppointment() {
    let id = document.getElementById("inputIdAppo").value;
    let existingAppo = JSON.parse(localStorage.getItem("appointments")) || [];

    let foundIndex = existingAppo.findIndex(appo => appo["id"] == id)
    if (foundIndex >= 0) {
        existingAppo.splice(foundIndex, 1);
        localStorage.setItem("appointments", JSON.stringify(existingAppo));
        console.log(localStorage.getItem("appointments"));
        window.location.reload();
    } else {
        alert("No appointment with id = " + id);

    }

}