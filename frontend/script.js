let dani = new Object();
dani.firstName = "Daniel";
dani.lastName = "Lendvai";
dani.location = "BP since 92'"
dani.motivation = "Building good-looking stuff from scratch";
dani.age = "27";
dani.education = "Szent Istvan University";
dani.workingfield = "Tourism & IT";
dani.interest = "Gaming, Foreign languages";
dani.highlight = "I have been maintaining a healthy mind for almost 30 years.";
dani.movie = "MCU movies";
dani.music = "90's hip-hop allstars";
dani.pet = "Zsanett the pet rabbit";
let jsonDani = JSON.stringify(dani); 

let timi = new Object();
timi.firstName = "Timea";
timi.lastName = "Her";
timi.location = "Göd";
timi.age = "48";
let jsonTimi = JSON.stringify(timi);

let robi = new Object();
robi.firstName = "Robert";
robi.lastName = "Valcsák";
robi.location = "Leányvár";
robi.age = "29";
let jsonRobi = JSON.stringify(robi);

let mark = new Object();
mark.firstName = "Mark";
mark.lastName = "Demeter";
mark.location = "Székesfehérvár";
mark.age = "32";
let jsonMark = JSON.stringify(mark);

let tomi = new Object();
tomi.firstName = "Tamas";
tomi.lastName = "Petruska";
tomi.location = "Budapest - XVIII.";
tomi.age = "23";
let jsonTomi = JSON.stringify(tomi);


let p = window.location.pathname; //checks which page is running

if (p.includes("daniellendvai")) {
    //if it contains "daniellenvai" then display
    document.querySelector(".fullName").innerHTML = dani.firstName + dani.lastName;
    document.querySelector(".location").innerHTML = dani.location;
    document.querySelector(".education").innerHTML = dani.education;
    document.querySelector(".working-field").innerHTML = dani.workingfield;
    document.querySelector(".motivation").innerHTML = dani.motivation;
    document.querySelector(".interest").innerHTML = dani.interest;
    document.querySelector(".highlight").innerHTML = dani.highlight;
    document.querySelector(".movie").innerHTML = dani.movie;
    document.querySelector(".music").innerHTML = dani.music;
    document.querySelector(".pet").innerHTML = dani.pet;
}
else {
    document.querySelector(".tomi").innerHTML = tomi.firstName + " " + tomi.lastName;
    document.querySelector(".tomi-list").appendChild(document.createElement('li')).innerHTML = tomi.age;
    document.querySelector(".tomi-list").appendChild(document.createElement('li')).innerHTML = tomi.location;

    document.querySelector(".timi").innerHTML = timi.firstName + " " + timi.lastName;
    document.querySelector(".timi-list").appendChild(document.createElement('li')).innerHTML = timi.age;
    document.querySelector(".timi-list").appendChild(document.createElement('li')).innerHTML = timi.location;

    document.querySelector(".robi").innerHTML = robi.firstName + " " + robi.lastName;
    document.querySelector(".robi-list").appendChild(document.createElement('li')).innerHTML = robi.age;
    document.querySelector(".robi-list").appendChild(document.createElement('li')).innerHTML = robi.location;

    document.querySelector(".dani").innerHTML = dani.firstName + " " + dani.lastName;
    document.querySelector(".dani-list").appendChild(document.createElement('li')).innerHTML = dani.age;
    document.querySelector(".dani-list").appendChild(document.createElement('li')).innerHTML = dani.location;

    document.querySelector(".mark").innerHTML = mark.firstName + " " + mark.lastName;
    document.querySelector(".mark-list").appendChild(document.createElement('li')).innerHTML = mark.age;
    document.querySelector(".mark-list").appendChild(document.createElement('li')).innerHTML = mark.location;
}
