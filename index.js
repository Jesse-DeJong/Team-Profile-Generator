// Import Dependencies
const inquirer = require('inquirer');

// Initilisation // Add a Manager
inquirer
  .prompt([
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
        message: 'What is the managers email?'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the managers office number?'
    },
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
        when: function( answers ) {
            return answers.continue === true;
        }
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  });

// Create HTML call