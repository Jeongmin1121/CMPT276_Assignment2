localStorage.clear();

// Retrieve people data from localStorage
var people = JSON.parse(localStorage.getItem("people")) || [];

console.log(people);

// Function to populate the table with people data
function populateTable() {
    
    if(people.length == 0){
        document.createElement("p").textContent = "No data to display";
    }else{
        var tableBody = document.querySelector("#peopleTable tbody");
        tableBody.innerHTML = "";
        var counter = 1;
        people.forEach(function(people) {
            var row = document.createElement("tr");
            row.innerHTML = `
                <td>${counter}</td>
                <td>${people.name}</td>
                <td>${people.weight}</td>
                <td>${people.height}</td>
                <td>${people.hairColor}</td>
                <td>${people.gpa}</td>
            `;
            tableBody.appendChild(row);
            counter++;
        });
    }
}

// Populate the table when the page loads
populateTable();


function personlogger(){
    console.log("Person logger");
    for (var i = 0; i < people.length; i++) {
        console.log(people);
        console.log("it came here");
    }
    console.log("its done");
}

for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//personlogger();
