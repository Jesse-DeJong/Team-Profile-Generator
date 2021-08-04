// Import Dependencies
const fs = require('fs');
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// Class processor functions
function newManager(data) {
    return new Manager(data.name, data.id, data.email, data.officeNumber);
}

function newIntern(data) {
    return new Intern(data.name, data.id, data.email, data.school);
}

function newEngineer(data) {
    return new Engineer(data.name, data.id, data.email, data.github);
}

/* HTML for Employee Cards */

// Manager
function managerHTML(manager) {
`<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Employee ID: ${manager.getId()}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${manager.getEmail()}" alt="Link for ${manager.getName()}'s email address">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficenumber()}</li>
        </ul>
    </div>
</div>`
}

// Engineers
function engineerHTML(engineer) {
`<div class="card employee-card">
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
</div>`
}

// Interns
function internHTML(intern) {
`<div class="card employee-card">
    <div class="card-header bg-primary text-white">
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
</div>`
}

// Employee Card Constructor calls function
function generateWebPage(organisation) {

    const managerCard = [];
    const engineerCards = [];
    const internCards = [];

    managerCard.push(organisation
    .filter(Employee => Employee.getRole() === 'Manager')
    .map(manager => managerHTML(manager))
    );
    engineerCards.push(organisation
    .filter(Employee => Employee.getRole() === 'Engineer')
    .map(engineer => engineerHTML(engineer))
    );
    internCards.push(organisation
    .filter(Employee => Employee.getRole() === 'Intern')
    .map(intern => internHTML(intern))
    );
        
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
          <h1 class="text-center text-white">My Team</h1>
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
<div class="container">
  <div class="row">
      <div class="row team-area col-12 d-flex justify-content-center">
          ${engineerCards}
      </div>
  </div>
</div>

<!-- Interns -->
<div class="container">
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

    fs.writeFile('index.html', constructedHTML, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('The HTML file has been created successfully!');
        }
    })
}

module.exports = { newManager, newIntern, newEngineer, generateWebPage }