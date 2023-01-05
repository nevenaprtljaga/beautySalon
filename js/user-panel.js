

let salonNames = [];
let data = JSON.parse(localStorage.getItem("salons"));
var count = Object.keys(data).length;

for(let i = 0; i < count; i++){
    salonNames.push(data[i].name);
}

let salonNamesDrop = document.getElementById("salon-names");
for (let i = 0; i < salonNames.length; ++i) {
    salonNamesDrop[salonNamesDrop.length] = new Option(salonNames[i], salonNames[i]);
}

//treba da cita tretmane iz baze salona

//dodaj cenu pored tretmana!!!
let treatmentNamesDrop = document.getElementById("treatment-names");
function fillTreatments(){
    let arrSalon = data.find(element => element.name == salonNamesDrop.value);
    let arrtre = arrSalon.treatments;
    for (a in treatmentNamesDrop.options) { treatmentNamesDrop.options.remove(0); }
    for (let i = 0; i < treatmentNames.length; ++i) {
        treatmentNamesDrop[treatmentNamesDrop.length] = new Option(arrtre[i].name, arrtre[i].name);
    }
}
document.getElementById("reserveButton").addEventListener("click", makeAp);



function makeAp(){
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let existingAppo = JSON.parse(localStorage.getItem("appointments")) || [];
    if(localStorage.getItem("currentUser") == "" || salonNamesDrop.value == "choose" || treatmentNamesDrop.value == "choose"  || date == "" || time == ""){
        alert("You need to enter the information!");
    }else{
        let appo = [{
            "username" : localStorage.getItem("currentUser"),
            "salonName" : salonNamesDrop.value,
            "treatmentName" : treatmentNamesDrop.value,
            "date" : date,
            "time" : time
        }]
        existingAppo.push(appo);
        localStorage.setItem("appointments", JSON.stringify(existingAppo));
        alert("Sucessful appointment!");    
        console.log(localStorage.getItem("appointments"));
        window.location.href="../html/home.html";
    }

}