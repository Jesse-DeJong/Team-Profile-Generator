// Import Dependencies
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

// HTML Constructor function
function generateWebPage(organisation) {
    organisation.filter('Manager');
}

module.exports = { newManager, newIntern, newEngineer, generateWebPage }