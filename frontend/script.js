let dani = new Object();
dani.firstName = "Daniel";
dani.lastName = "Lendvai";
dani.location = "BP since 92'";
dani.motivation = "Building good-looking stuff from scratch";
dani.age = "29";
dani.education = "Szent Istvan University";
dani.workingfield = "Tourism & IT";
dani.interest = "Gaming, Foreign languages";
dani.highlight = "I have been maintaining a healthy mind for almost 30 years.";
dani.movie = "MCU movies";
dani.music = "90's hip-hop allstars";
dani.pet = "Zsanett the pet rabbit";

let timi = new Object();
timi.firstName = "Timea";
timi.lastName = "Her";
timi.location = "Göd";
timi.age = "48";

let robi = new Object();
robi.firstName = "Robert";
robi.lastName = "Valcsák";
robi.location = "Leányvár";
robi.age = "29";

let mark = new Object();
mark.firstName = "Mark";
mark.lastName = "Demeter";
mark.location = "Székesfehérvár";
mark.age = "32";

let tomi = new Object();
tomi.firstName = "Tamas";
tomi.lastName = "Petruska";
tomi.location = "Budapest - XVIII.";
tomi.age = "23";

let otherteam = new Object();
otherteam.first =
  "Sport és zene szerelmes, fekete öves sörivó. Kaotikus az élete, mint egy Guy Ritchie forgatókönyv.";
otherteam.second =
  "A képzésre a karrierváltás miatt jelentkezett. Szeret futni és falat mászni - ehhez elegendőek néha a gyerekei is.";
otherteam.third =
  "Kedvenc műfajai Rock, Blues illetve Contemporary worship. Sokféle sportot szeret űzni pl. túrázás, biciklizés, snowboardozás. Szeret inspiráló emberek társaságában lenni.";
otherteam.fourth =
  "A marketing világából érkezik. Szereti a sportokat, filmeket, a sörözéssel egybekötött csapatépítéseket. A mentor-simogatás még ismeretlen élmény számára, de nem zárkózik el az újdonságok elől.";

let p = window.location.pathname; //checks which page is running

if (p.includes("daniellendvai")) {
  //if it contains "daniellenvai" then display
  document.querySelector(".fullName").innerHTML =
    dani.firstName + dani.lastName;
  document.querySelector(".location").innerHTML = dani.location;
  document.querySelector(".education").innerHTML = dani.education;
  document.querySelector(".working-field").innerHTML = dani.workingfield;
  document.querySelector(".motivation").innerHTML = dani.motivation;
  document.querySelector(".interest").innerHTML = dani.interest;
  document.querySelector(".highlight").innerHTML = dani.highlight;
  document.querySelector(".movie").innerHTML = dani.movie;
  document.querySelector(".music").innerHTML = dani.music;
  document.querySelector(".pet").innerHTML = dani.pet;
} else {
  // Tomi főoldali lista
  document.querySelector(".tomi").innerHTML =
    tomi.firstName + " " + tomi.lastName;
  document
    .querySelector(".tomi-list")
    .appendChild(document.createElement("li")).innerHTML = tomi.age;
  document
    .querySelector(".tomi-list")
    .appendChild(document.createElement("li")).innerHTML = tomi.location;
  // Timi főoldali lista
  document.querySelector(".timi").innerHTML =
    timi.firstName + " " + timi.lastName;
  document
    .querySelector(".timi-list")
    .appendChild(document.createElement("li")).innerHTML = timi.age;
  document
    .querySelector(".timi-list")
    .appendChild(document.createElement("li")).innerHTML = timi.location;
  // Robi főoldali lista
  document.querySelector(".robi").innerHTML =
    robi.firstName + " " + robi.lastName;
  document
    .querySelector(".robi-list")
    .appendChild(document.createElement("li")).innerHTML = robi.age;
  document
    .querySelector(".robi-list")
    .appendChild(document.createElement("li")).innerHTML = robi.location;
  // Dani főoldali lista
  document.querySelector(".dani").innerHTML =
    dani.firstName + " " + dani.lastName;
  document
    .querySelector(".dani-list")
    .appendChild(document.createElement("li")).innerHTML = dani.age;
  document
    .querySelector(".dani-list")
    .appendChild(document.createElement("li")).innerHTML = dani.location;
  // Márk főoldali lista
  document.querySelector(".mark").innerHTML =
    mark.firstName + " " + mark.lastName;
  document
    .querySelector(".mark-list")
    .appendChild(document.createElement("li")).innerHTML = mark.age;
  document
    .querySelector(".mark-list")
    .appendChild(document.createElement("li")).innerHTML = mark.location;
  // Másik csapat főoldali lista
  document
    .querySelector(".unknown1")
    .appendChild(document.createElement("li")).innerHTML = otherteam.first;
  document
    .querySelector(".unknown2")
    .appendChild(document.createElement("li")).innerHTML = otherteam.second;
  document
    .querySelector(".unknown3")
    .appendChild(document.createElement("li")).innerHTML = otherteam.third;
  document
    .querySelector(".unknown4")
    .appendChild(document.createElement("li")).innerHTML = otherteam.fourth;
}
// Guess the other team
const checkNumber = () => {
  const x = document.getElementById("number").value;
  if (x == undefined) {
    return;
  } else if (x == 2) {
    document.querySelector(".guessResult").innerHTML = "Correct!";
  } else document.querySelector(".guessResult").innerHTML = "Incorrect!";
};
