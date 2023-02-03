const Manager = require('../lib/Manager');

test('checking if the role is Manager', () => {
    let emp = new Manager('Cat', '42069', 'pancake@gmail.com');
    expect(emp.getRole()).toEqual('Manager');
});