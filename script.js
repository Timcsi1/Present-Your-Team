// JSON string
let txt =
    '{"classMates":[' +
    '{"firstName":"Daniel","lastName":"Lendvai","education":"Szent Istvan University","motivation":"Building good-looking stuff from scracth"},' +
    '{"firstName":"Anna","lastName":"Smith","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Johannis","lastName":"Jones","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Robert","lastName":"Garry","education":"School","motivation":"Lorem ipsum"},' +
    '{"firstName":"Lazlov","lastName":"Abraham","education":"School","motivation":"Lorem ipsum"}]}';

//  converts text into a JavaScript object 
let obj = JSON.parse(txt);

// changing the html element by id 
document.getElementById("fullName").innerHTML =
    obj.classMates[0].firstName + " " + obj.classMates[0].lastName;
document.getElementById("education").innerHTML = obj.classMates[0].education;
document.getElementById("motivation").innerHTML = obj.classMates[0].motivation;
