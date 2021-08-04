// Import Dependencies
const inquirer = require('inquirer');
const { newManager, newIntern, newEngineer } = require('./src/processor');
const organisation = [];
// Initilisation 
createManager();
// Prompt for a Manager as there must always be a manager
function createManager() {
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
        message: 'What is the managers email address?'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the managers office number?'
    }
  ])
  .then(data => {
    organisation.push(newManager(data));
    createEmployee();
  })
}

    // Initiate Loop for adding additional employees //while? (answers.continue === true)?
//     {
//         name: 'continue',
//         type: 'confirm',
//         message: 'Would you like to add another employee?'
//     },
//     {
//         name: 'role',
//         type: 'list',
//         message: 'What is the employees role?',
//         choices: ['Engineer', 'Intern'],
//         when: function( data ) {
//             return data.continue === true;
//     }
// }
//     .then(function (data) {
//             switch (data.role) {

//             case data.role === 'Engineer':
//                 createEngineer()
//                 break;
//             case data.role === 'Intern':
//                 createIntern()
//                 break;
//             } 
//         })
//     ])
// }