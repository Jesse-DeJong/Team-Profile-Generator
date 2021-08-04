const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Verify the Intern extension of the employee class', () => {
    it('should describe the new Intern', () => {
        const name = 'John Smith';
        const id = 47;
        const email = 'johnsmith@gmail.com';
        const school = 'Massachusetts Institute of Technology';

        const newIntern = new Intern (name, id, email, school);

        expect(newIntern.name).toBe(name);
        expect(newIntern.id).toBe(id);
        expect(typeof newIntern.id).toBe('number');
        expect(newIntern.email).toBe(email);
        expect(newIntern.school).toBe(school);
    })
})