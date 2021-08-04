const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Verify the engineer extension of the employee class', () => {
    it('should describe the new engineer', () => {
        const name = 'John Smith';
        const id = 47;
        const email = 'johnsmith@gmail.com';
        const github = 'john-smith';

        const newEngineer = new Engineer (name, id, email, github);

        expect(newEngineer.name).toBe(name);
        expect(newEngineer.id).toBe(id);
        expect(typeof newEngineer.id).toBe('number');
        expect(newEngineer.email).toBe(email);
        expect(newEngineer.github).toBe(github);
    })
})