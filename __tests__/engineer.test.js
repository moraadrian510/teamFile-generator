// using Engineer constructor 
const Engineer = require('../lib/engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Adrian', 510, 'moraadrian510@icloud.com', 'github.com/moraadrian510');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Adrian', 510, 'moraadrian510@icloud.com', 'github.com/moraadrian510');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Adrian', 510, 'moraadrian510@icloud.com', 'github.com/moraadrian510');

    expect(engineer.getRole()).toEqual("Engineer");
});
