let salonNamesDrop = document.getElementById("salon-names");
for (let i = 0; i < salonNames.length; ++i) {
    salonNamesDrop[salonNamesDrop.length] = new Option(salonNames[i], salonNames[i]);
}

let treatmentNamesDrop = document.getElementById("treatment-names");
for (let i = 0; i < treatmentNames.length; ++i) {
    treatmentNamesDrop[treatmentNamesDrop.length] = new Option(treatmentNames[i], treatmentNames[i]);
}

//make an appointment

document.getElementById("reserveButton").addEventListener("click", makeAp);  

function makeAp(){
    let appo = [{
        "username" : localStorage.getItem("currentUser"),
        "salonName" : salonNamesDrop.value,
        "treatmentName" : treatmentNamesDrop.value
    }]

    localStorage.setItem("appointments", JSON.stringify(appo));

    console.log(localStorage.getItem("appointments"));
}