// Import Dependencies
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const { newManager, newIntern, newEngineer, generateWebPage } = require('./src/processor');
// Store array of object results from CLI prompts
const teamMembers = [];

// Initilisation -- Prompt for a Manager as there must always be a manager //
createManager();

// Recurring Function to prompt for additional employees
function createEmployee() {

    inquirer.prompt([
    {
        name: 'continue',
        type: 'confirm',
        message: 'Would you like to add another employee?'
    },
    {
        name: 'role',
        type: 'list',
        message: 'What is the employees role?',
        choices: ['Engineer', 'Intern'],
            when: function( data ) {
                return data.continue === true;
            }
    }
    ])
    .then(function (data) {
        switch (data.role) {
        case 'Engineer':
            createEngineer()
            break;
        case 'Intern':
            createIntern()
            break;
        default:
            generateWebPage(teamMembers)
            break;
        } 
    })
}

// Function to create the managers details
function createManager() {

    inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the managers name?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the managers employee id?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the managers email address?'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the managers office number?'
    }
  ])
  .then(data => {
    teamMembers.push(newManager(data));
    createEmployee();
  })
}

// Function to create a new Engineer
function createEngineer() {

    inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the engineers name?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the engineers employee id?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the engineers email address?'
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is the engineers github name?'
    }
  ])
  .then(data => {
    teamMembers.push(newEngineer(data));
    createEmployee();
  })
}

// Function to create a new Intern
function createIntern() {

    inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the interns name?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is the interns employee id?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is the interns email address?'
    },
    {
        name: 'school',
        type: 'input',
        message: 'Which school is the intern from?'
    }
  ])
  .then(data => {
    teamMembers.push(newIntern(data));
    createEmployee();
  })
}