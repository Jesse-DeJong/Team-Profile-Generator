const Employee = require('../lib/Employee');

describe('Verify the employee class', () => {
    it('should describe the new employee', () => {
        const name = 'John Smith';
        const id = 47;
        const email = 'johnsmith@gmail.com';

        const newEmployee = new Employee (name, id, email);

        expect(newEmployee.name).toBe(name);
        expect(newEmployee.id).toBe(id);
        expect(typeof newEmployee.id).toBe('number');
        expect(newEmployee.email).toBe(email);
    })
})