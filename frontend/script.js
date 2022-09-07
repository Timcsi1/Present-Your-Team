// JSON string
let txt =
    '{"classMates":[' +
    '{"firstName":"Daniel","lastName":"Lendvai","education":"Szent Istvan University","motivation":"Building good-looking stuff from scratch","workingfields":"Tourism"},' +
    '{"firstName":"Mark","lastName":"Smith","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Johannis","lastName":"Jones","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Robert","lastName":"Garry","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Lazlov","lastName":"Abraham","education":"School","motivation":"Lorem ipsum"}]}';

let obj = JSON.parse(txt); //  converts text into a JavaScript object

document.querySelector(".education").appendChild(document.createElement('li')).textContent = obj.classMates[0].education;

document.querySelector(".working-fields").appendChild(document.createElement('li')).textContent = obj.classMates[0].workingfields;