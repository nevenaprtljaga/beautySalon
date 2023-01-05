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


//localStorage.clear(); //odkomentarisi za ciscenje storage, jednom pokreni i ponovo zakomentarisi

//localStorage.setItem("users", JSON.stringify(users)); //odkomentarisi, jednom pokreni i zakomentarisi, pocetni korisnici su dodati (ili preko stranice za registraciju dodati korisnike)


let salons = [{
    "name" : "Diva",
    "address" : "blabla",
    "treatments" : [{
        "name" : "manicure",
        "price" : "3000"
    },
    {
        "name" : "haircut",
        "price" : "2000"
    }
    ]
    
},
{
    "name" : "Lepa Svaki Dan",
    "address" : "asasa",
    "treatments" : [{
        "name" : "manicure",
        "price" : "1111"
    },
    {
        "name" : "haircut",
        "price" : "2222"
    }
    ]
},
{
    "name" : "Lola",
    "address" : "ajajaj",
    "treatments" : [{
        "name" : "manicure",
        "price" : "234"
    },
    {
        "name" : "haircut",
        "price" : "3456"
    }
    ]
}];

//localStorage.setItem("salons", JSON.stringify(salons));

let treatmentNames = ["Manicure", "Laser treatment", "Haircut", "Facemask"];

let roleNames = ["admin", "customer"];