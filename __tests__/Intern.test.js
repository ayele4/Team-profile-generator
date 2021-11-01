const Intern = require('../lib/Intern');

test('Can set github using constructor method', () => {
    const testValue = 'sampleSchool';
    const newIntern = new Intern('Sam', 1, 'sam@email.com', testValue);
    expect(newIntern.school).toBe(testValue);
})