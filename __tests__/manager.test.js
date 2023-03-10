// using Manager constructor 
const Manager = require('../lib/manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Adrian', 510, 'moraadrian510@icloud.com', 9);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Adrian', 510, 'moraadrian510@icloud.com', 9);

    expect(manager.getRole()).toEqual("Manager");
}); 
