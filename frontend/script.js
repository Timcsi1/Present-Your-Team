// JSON string
let txt = `{"classMates":[{"firstName":"Daniel","lastName":"Lendvai","age":"29","location":"BP since 92","education":"Szent Istvan University","motivation":"Building good-looking stuff from scratch","workingfield":"Tourism","skill":"loremipsum","interest":"loremipsummipsum","highlight":"loremipsum","movie":"loremipsum","music":"loremipsum","videogame":"loremipsum"}]}`;

let obj = JSON.parse(txt); //  converts text into a JavaScript object
let p = window.location.pathname; //checks which page is running

if (p.includes("daniellendvai")) {
    //if it contains "daniellenvai" then display
    document.querySelector(".fullName").innerHTML =
        obj.classMates[0].firstName + " " + obj.classMates[0].lastName;

    document.querySelector(".location").innerHTML = obj.classMates[0].location;
    document.querySelector(".age").innerHTML = obj.classMates[0].age;

    document
        .querySelector(".education")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].education;
    document
        .querySelector(".working-field")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].workingfield;
    document
        .querySelector(".motivation")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].motivation;
    document
        .querySelector(".interest")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].interest;
    document
        .querySelector(".highlight")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].highlight;
    document
        .querySelector(".movie")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].movie;
    document
        .querySelector(".music")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].music;
    document
        .querySelector(".videogame")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].videogame;
}