const Manager = require('../lib/Manager');

test('Can set github using constructor method', () => {
    const testValue = 112;
    const newManager = new Manager('Sam', 1, 'sam@email.com', testValue);
    expect(newManager.officeNumber).toBe(testValue);
})