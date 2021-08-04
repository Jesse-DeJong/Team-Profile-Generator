const Employee = require('../lib/Employee');

describe('Verify the employee class', () => {
    it('should describe the new employee', () => {
        const name = 'John Smith';
        const id = 47;
        const email = 'johnsmith@gmail.com';

        const newEmployee = new Employee (name, id, email);

        expect(newEmployee.name).tobe(name);
        expect(newEmployee.id).tobe(id);
        expect(typeof newEmployee.id).tobe('number');
        expect(newEmployee.email).tobe(email);
        expect(newEmployee.email).toinclude('@');
    })
})