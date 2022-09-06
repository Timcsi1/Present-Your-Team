let images = [];
images.push("", "", "", "", "");

// JSON string
let txt =
    '{"classMates":[' +
    '{"firstName":"Daniel","lastName":"Lendvai","education":"Szent Istvan University","motivation":"Building good-looking stuff from scratch"},' +
    '{"firstName":"Mark","lastName":"Smith","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Johannis","lastName":"Jones","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Robert","lastName":"Garry","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Lazlov","lastName":"Abraham","education":"School","motivation":"Lorem ipsum"}]}';

let obj = JSON.parse(txt); //  converts text into a JavaScript object

// changing the html element by class
document.querySelector(".fullName").innerHTML =
    obj.classMates[0].firstName + " " + obj.classMates[0].lastName;
document.querySelector(".education").innerHTML = obj.classMates[0].education;
document.querySelector(".motivation").innerHTML = obj.classMates[0].motivation;
