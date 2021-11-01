const Employee = require('../lib/Employee');

test('Can set name using constructor method', () => {
    const name = 'Aaron';
    const e = new Employee(name);
    expect(e.name).toBe(name);
})