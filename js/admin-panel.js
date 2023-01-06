// console.log(localStorage.getItem("users"));

// console.log(localStorage.getItem("salons"));

let data = JSON.parse(localStorage.getItem("salons"));

let listTre = [];
var tbody = document.getElementById('body');

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
