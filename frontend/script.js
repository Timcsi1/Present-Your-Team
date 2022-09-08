// JSON string
let txt = `{"classMates":[{"firstName":"Daniel","lastName":"Lendvai","age":"29","location":"Budapest, HU since 92","education":"Szent Istvan University","motivation":"Building good-looking stuff from scratch","workingfield":"Tourism & IT","skill":"loremipsum","interest":"Gaming","interest2":"Foreing languages","highlight":"I have been maintaining a healthy mind for almost 30 years.","movie":"MCU movies","music":"90's hip-hop allstars","pet":"Zsanett the pet rabbit"}]}`;

let obj = JSON.parse(txt); //  converts text into a JavaScript object
let p = window.location.pathname; //checks which page is running

if (p.includes("daniellendvai")) {
    //if it contains "daniellenvai" then display
    document.querySelector(".fullName").innerHTML =
        obj.classMates[0].firstName + " " + obj.classMates[0].lastName;
    document.querySelector(".location").innerHTML = obj.classMates[0].location;
    document.querySelector(".education").innerHTML =
        obj.classMates[0].education;
    document.querySelector(".working-field").innerHTML =
        obj.classMates[0].workingfield;
    document.querySelector(".motivation").innerHTML =
        obj.classMates[0].motivation;
    document.querySelector(".interest").innerHTML =
        obj.classMates[0].interest + ", " + obj.classMates[0].interest2;
    document.querySelector(".highlight").innerHTML =
        obj.classMates[0].highlight;
    document.querySelector(".movie").innerHTML = obj.classMates[0].movie;
    document.querySelector(".music").innerHTML = obj.classMates[0].music;
    document.querySelector(".pet").innerHTML = obj.classMates[0].pet;
}
