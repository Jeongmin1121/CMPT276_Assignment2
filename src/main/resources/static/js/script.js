var people = [];

document.getElementById("personForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var name = form.elements["name"].value;
    var weight = parseFloat(form.elements["weight"].value);
    var height = parseFloat(form.elements["height"].value);
    var hairColor = form.elements["hairColor"].value;
    var gpa = parseFloat(form.elements["gpa"].value);

    addPerson(name, weight, height, hairColor, gpa);
    form.reset();
});

function addPerson(name, weight, height, hairColor, gpa) {
    var person = {
        name: name,
        weight: weight,
        height: height,
        hairColor: hairColor,
        gpa: gpa
    };
    people.push(person);
    displayPeople();
}

function displayPeople() {
    var list = document.getElementById("peopleList");
    list.innerHTML = "";
    people.forEach(function(person) {
        var listItem = document.createElement("div");
        listItem.textContent = "Name: " + person.name + ", Weight: " + person.weight + " kg, Height: " + person.height + " cm, Hair Color: " + person.hairColor + ", GPA: " + person.gpa;
        list.appendChild(listItem);
    });
}
