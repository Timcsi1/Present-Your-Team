// JSON string
let txt =
    '{"classMates":[' +
    '{"firstName":"Daniel","lastName":"Lendvai","education":"Szent Istvan University","motivation":"Building good-looking stuff from scratch","workingfields":"Tourism"},' +
    '{"firstName":"Mark","lastName":"Smith","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Johannis","lastName":"Jones","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Robert","lastName":"Garry","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Lazlov","lastName":"Abraham","education":"School","motivation":"Lorem ipsum"}]}';

let obj = JSON.parse(txt); //  converts text into a JavaScript object

let p = window.location.pathname;   //checks which page is running
if (p.includes("daniellendvai")) {  //if it contains "daniellenvai" then display 
    document
        .querySelector(".education")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].education;
    document
        .querySelector(".working-fields")
        .appendChild(document.createElement("li")).textContent =
        obj.classMates[0].workingfields;
} 
if (p.includes("sajatneved")) {    //if it contains "sajatneved" then display 
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