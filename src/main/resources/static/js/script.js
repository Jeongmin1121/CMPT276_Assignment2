var people = [];

// Retrieve people array from localStorage when the page loads
window.addEventListener("load", function() {
    var storedPeople = localStorage.getItem('people');
    if (storedPeople) {
        people = JSON.parse(storedPeople);
        displayPeople();
    }
});

document.getElementById("personForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var name = form.elements["name"].value;
    var weight = parseFloat(form.elements["weight"].value);
    var height = parseFloat(form.elements["height"].value);
    var hairColor = form.elements["hairColor"].value;
    var gpa = parseFloat(form.elements["gpa"].value);
    if (name && !isNaN(weight) && !isNaN(height) && hairColor && !isNaN(gpa)) {
        addPerson(name, weight, height, hairColor, gpa);
        form.reset();
    } else {
        alert("Please enter all the information to add a new person.");
    }
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
    // Save the people array to localStorage
    localStorage.setItem('people', JSON.stringify(people));
}

function displayPeople() {
    var list = document.getElementById("peopleList");
    list.innerHTML = "";
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        var listItem = document.createElement("div");
        listItem.textContent = "Name: " + person.name + ", Weight: " + person.weight + " kg, Height: " + person.height + " cm, Hair Color: " + person.hairColor + ", GPA: " + person.gpa;
        list.appendChild(listItem);
    }
}

//export {people};
//addPerson("jeongmin", 72, 170, "Black", 2.3);
//addPerson("Emily", 42, 155, "Brown", 3);