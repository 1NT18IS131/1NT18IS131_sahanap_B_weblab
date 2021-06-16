console.log("sahana");
var car = { type: "Polo", model: "500", color: "white" };
document.getElementById("id1").innerHTML = "The car type is" + car.type;

var person = {
    firstName: "Sahana",
    lastName: "P",
    id: 123,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }

};

document.getElementById("id2").innerHTML = person.fullName();

let displayDate = () => { document.getElementById("id4").innerHTML = Date() };

let name = prompt("enter your name");
document.getElementById("id5").innerHTML = alert(name.length);

let x = "We are the happy";
document.getElementById("id6").innerHTML = x;

let namee = "sahana";
let y = new String("sahana");
document.getElementById("id7").innerHTML = (namee === y);