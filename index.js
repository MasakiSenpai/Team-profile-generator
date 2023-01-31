const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const outputFolder = path.resolve(__dirname, 'dist');
const outputFile = path.join(outputFolder, 'index.html');
const employees = [];

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'What type of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'Nevermind']
        }
    ]).then((data) => {
        switch(data.userChoice) {
           case 'Manager':
                createManger();
                break;
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                endProgram();
        }
    })
}

function createManger() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee Email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Employee Office number?'
        }
    ]).then((data) => {
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(newManager);
        menu();
    })
}

function generateManager(emp) {
    return ` 
    <div>
        <h3>Manager</h3>
        <h4>${emp.getName()}</h4>
        <p><b>Id: </b>${emp.getId()}</p>
        <p><b>Email: </b>${emp.getEmail()}</p>
        <p><b>Office Number: </b>${emp.getOfficeNumber()}</p>
    </div>`
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Employee GitHub?'
        }
    ]).then((data) => {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(newEngineer);
        menu();
    })
}

function generateEngineer(emp) {
    return ` 
    <div>
        <h3>Engineer</h3>
        <h4>${emp.getName()}</h4>
        <p><b>Id: </b>${emp.getId()}</p>
        <p><b>Email: </b>${emp.getEmail()}</p>
        <p><b>GitHub: </b>${emp.getGithub()}</p>
    </div>`
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Employee School?'
        }
    ]).then((data) => {
        const newIntern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(newIntern);
        menu();
    })
}

function generateIntern(emp) {
    return ` 
    <div>
        <h3>Intern</h3>
        <h4>${emp.getName()}</h4>
        <p><b>Id:</b>${emp.getId()}</p>
        <p><b>Email:</b>${emp.getEmail()}</p>
        <p><b>School: </b>${emp.getSchool()}</p>
    </div>`
}

function generateHtml() {
    let html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employees</title>
    </head>
    <body>`
    employees.forEach(emp => {
        switch(emp.getRole()) {
            case 'Manager':
                html += generateManager(emp);
                break;
            case 'Engineer':
                html += generateEngineer(emp);
                break;
            case 'Intern':
                html += generateIntern(emp);
                break;
        }   
    });
    html += 
    `</body>
    </html>`
    fs.writeFileSync(outputFile, html);
}

function endProgram() {
    generateHtml();
    process.exit();
}

menu();