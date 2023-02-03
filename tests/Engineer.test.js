const Engineer = require('../lib/Engineer');

test('checking if the role is Engineer', () => {
    let emp = new Engineer('Cat', '42069', 'pancake@gmail.com');
    expect(emp.getRole()).toEqual('Engineer');
});