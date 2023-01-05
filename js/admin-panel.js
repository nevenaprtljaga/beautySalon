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
    let salonTreatments = document.getElementById("salonTreatmentsInput").value;
    let existingSalons = JSON.parse(localStorage.getItem("salons")) || [];

    
    let arrTreatments = salonTreatments.split(",");


    let newSalon = {
        name: salonName,
        address : salonAddress,
        treatments : []
    };
    

    for(let i = 0; i < arrTreatments.length; i+=2){
        newSalon.treatments.push({name: arrTreatments[i], price: arrTreatments[i+1]});
    }
    
  

    if(!existingSalons.some(salon => salon["name"] === salonName)){
        existingSalons.push(newSalon);
        localStorage.setItem("salons", JSON.stringify(existingSalons));
        console.log(localStorage.getItem("salons"));
    }else{
        alert("Salon name exists in database.");
    }
}


//delete usera
// delete appointmenta
