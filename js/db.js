let users = [{
    "id" : 0,
    "username" : "nevena",
    "password" : "neve",
    "role" : "admin"
},
{
    "id" : 1,
    "username" : "clarivate",
    "password" : "clar",
    "role" : "customer"
}];


//localStorage.clear();

//localStorage.setItem("users", JSON.stringify(users));

if(localStorage.getItem("users") == []){
    localStorage.setItem("users", JSON.stringify(users));
}

let salonNames = ["Diva", "Lepa Svaki Dan", "Lola"];

let treatmentNames = ["Manicure", "Laser treatment", "Haircut", "Facemask"];

let roleNames = ["admin", "customer"];