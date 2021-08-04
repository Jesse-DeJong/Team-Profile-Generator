const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Verify the Manager extension of the employee class', () => {
    it('should describe the new Manager', () => {
        const name = 'John Smith';
        const id = 47;
        const email = 'johnsmith@gmail.com';
        const officeNumber = '0412345678';

        const newManager = new Manager (name, id, email, officeNumber);

        expect(newManager.name).toBe(name);
        expect(newManager.id).toBe(id);
        expect(typeof newManager.id).toBe('number');
        expect(newManager.email).toBe(email);
        expect(newManager.officeNumber).toBe(officeNumber);
    })
})