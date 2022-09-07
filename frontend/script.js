// JSON string
let txt =
    '{"classMates":[' +
    '{"firstName":"Daniel","lastName":"Lendvai","education":"Szent Istvan University","motivation":"Building good-looking stuff from scratch","workingfield":"Tourism","skill":"loremipsum","interest":"loremipsummipsum","highlight":"loremipsum","movie":"loremipsum","music":"loremipsum","videogame":"loremipsum"},' +
    '{"firstName":"Mark","lastName":"Smith","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Johannis","lastName":"Jones","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Robert","lastName":"Garry","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Lazlov","lastName":"Abraham","education":"School","motivation":"Lorem ipsum"}]}';

let obj = JSON.parse(txt); //  converts text into a JavaScript object

let p = window.location.pathname; //checks which page is running
if (p.includes("daniellendvai")) {
    //if it contains "daniellenvai" then display
    document
        .querySelector(".education")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].education;
    document
        .querySelector(".working-field")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].workingfield;
    document
        .querySelector(".skill")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].skill;
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
if (p.includes("sajatneved")) {
    //if it contains "sajatneved" then display
    document
        .querySelector(".education")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[1].education;
    document
        .querySelector(".working-fields")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].workingfields;
}
console.log(p);
