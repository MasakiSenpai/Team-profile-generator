const Employee = require('../lib/Employee');

test('creates employee', () => {
    let emp = new Employee('Cat', '42069', 'pancake@gmail.com')
    expect (typeof(emp)).toBe('object')
}) 

test('Checking to make sure name is set properly', () => {
    let emp = new Employee('Cat', '42069', 'pancake@gmail.com');
    expect(emp.getName()).toBe('Cat');
})