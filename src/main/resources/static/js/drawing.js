// Retrieve people data from localStorage
var people = JSON.parse(localStorage.getItem("people")) || [];

// Function to create rectangles representing people
function createPeopleRectangles() {
    var container = document.getElementById("peopleContainer");
    container.innerHTML = ""; // Clear previous content

    people.forEach(function(person) {
        var personDiv = document.createElement("div");
        personDiv.classList.add("person");

        // Set width based on weight
        personDiv.style.width = person.weight*3 + "px";

        // Set height based on height
        personDiv.style.height = person.height*2 + "px";

        // Set background color based on hair color
        personDiv.style.backgroundColor = person.hairColor;

        // Display person's name, hair color, and GPA inside the rectangle
        personDiv.innerHTML = `
            <p>${"NAME"}</p>
            <p>${person.name}</p>
            <p>${"GPA"}</p>
            <p>${person.gpa}</p>
        `;

        container.appendChild(personDiv);
    });
}

// Create rectangles when the page loads
createPeopleRectangles();