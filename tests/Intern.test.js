const Intern = require('../lib/Intern');

test('checking if the role is Intern', () => {
    let emp = new Intern('Cat', '42069', 'pancake@gmail.com');
    expect(emp.getRole()).toEqual('Intern');
});