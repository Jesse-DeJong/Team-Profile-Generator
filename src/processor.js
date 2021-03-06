// Import Dependencies
const fs = require('fs');
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// Class processor functions abstracted from index.js
function newManager(data) {
    return new Manager(data.name, data.id, data.email, data.officeNumber);
}

function newIntern(data) {
    return new Intern(data.name, data.id, data.email, data.school);
}

function newEngineer(data) {
    return new Engineer(data.name, data.id, data.email, data.github);
}

/* HTML generation for Employee Cards */

// Manager
function managerHTML(manager) {
return `
<div class="card">
    <div class="card-header bg-danger text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Employee ID: ${manager.getId()}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${manager.getEmail()}" alt="Link for ${manager.getName()}'s email address">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`
}

// Engineers
function engineerHTML(engineer) {
return `
<div class="row team-area col-4 d-flex justify-content-center">
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${engineer.getEmail()}" alt="Link for ${engineer.getName()}'s email address">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub Account: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
</div>`
}

// Interns
function internHTML(intern) {
return `
<div class="row team-area col-4 d-flex justify-content-center">
    <div class="card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${intern.getEmail()}" alt="Link for ${intern.getName()}'s email address">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
</div>`
}

// Employee Card Constructor --- filtering and calling function
function generateWebPage(organisation) {

    let managerCard = '';
    const engineerCards = [];
    const internCards = [];

    managerCard = (organisation
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => managerHTML(manager))
    );
    engineerCards.push(organisation
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => engineerHTML(engineer))
    .join("")
    );
    internCards.push(organisation
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => internHTML(intern))
    .join("")
    );
        // Call to build the HTML from the arrays of filtered information
        buildPage(managerCard, engineerCards, internCards);
}

// Bootstrap HTML Constructed index.html //
function buildPage(managerCard, engineerCards, internCards) {

    const constructedHTML = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>My Team Profile</title>
  </head>

  <body>
  <div class="container-fluid">
  <div class="row">
      <div class="col-12 jumbotron mb-3 team-heading bg-success">
          <h1 class="text-center text-white">Organisational Chart</h1>
      </div>
  </div>
</div>

<!-- Manager -->
<div class="container">
  <div class="row">
      <div class="row team-area col-12 d-flex justify-content-center">
          ${managerCard}
      </div>
  </div>
</div>

<!-- Engineers -->
<div class="container mt-3">
  <div class="row">
      <div class="row team-area col-12 d-flex justify-content-center">
          ${engineerCards}
      </div>
  </div>
</div>

<!-- Interns -->
<div class="container mt-3">
  <div class="row">
      <div class="row team-area col-12 d-flex justify-content-center">
          ${internCards}
      </div>
  </div>
</div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  </body>
</html>`

    // Write the finalised HTML to an index.html file
    fs.writeFile('index.html', constructedHTML, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('The HTML file has been created successfully!');
        }
    })
}

// Export functions to index.js
module.exports = { newManager, newIntern, newEngineer, generateWebPage }