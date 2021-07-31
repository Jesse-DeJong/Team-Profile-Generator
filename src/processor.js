// Import Dependencies
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function newManager(data) {
    new Manager(data.name, data.id, data.email, data.officeNumber);
}

function newIntern(data) {
    new Intern(data.name, data.id, data.email, data.school);
}

function newEngineer(data) {
    new Engineer(data.name, data.id, data.email, data.github);
}