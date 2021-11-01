const Engineer = require('../lib/Engineer');

test('Can set github using constructor method', () => {
    const testValue = 'sampleGithub';
    const newEngineer = new Engineer('Sam', 1, 'sam@email.com', testValue);
    expect(newEngineer.github).toBe(testValue);
})