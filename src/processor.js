// Import Dependencies
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function newManager(data) {
    return new Manager(data.name, data.id, data.email, data.officeNumber);
}

function newIntern(data) {
    return new Intern(data.name, data.id, data.email, data.school);
}

function newEngineer(data) {
    return new Engineer(data.name, data.id, data.email, data.github);
}

module.exports = { newManager, newIntern, newEngineer }