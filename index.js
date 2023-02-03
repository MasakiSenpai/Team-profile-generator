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
    <div class="col-3"> 
        <div class="card m-4" style="max-width: 18rem;">
            <div class="card-body p-0">
                <div class="bg-primary rounded-top text-center p-3">
                    <h5 class="card-title text-white fs-2">${emp.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-white fs-4">Manager</h6>
                </div>
                <div class="card m-3" style="max-width: 18rem;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <b>Id: </b>${emp.getId()}</li>
                    <li class="list-group-item"> <b>Email: </b>${emp.getEmail()}</li>
                    <li class="list-group-item"> <b>Office Number: </b>${emp.getOfficeNumber()}</li>
                </ul>
                </div>
            </div>
        </div>
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
    <div class="col-3"> 
        <div class="card m-4" style="max-width: 18rem;">
          <div class="card-body p-0">
            <div class="bg-primary rounded-top text-center p-3">
              <h5 class="card-title text-white fs-2">${emp.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-white fs-4">Engineer</h6>
            </div>
            <div class="card m-3" style="max-width: 18rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"> <b>Id: </b> ${emp.getId()}</li>
                  <li class="list-group-item"> <b>Email: </b>${emp.getEmail()}</li>
                  <li class="list-group-item"> <b>GitHub: </b>${emp.getGithub()}</li>
                </ul>
              </div>
          </div>
        </div>
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
    <div class="col-3"> 
        <div class="card m-4" style="max-width: 18rem;">
          <div class="card-body p-0">
            <div class="bg-primary rounded-top text-center p-3">
              <h5 class="card-title text-white fs-2">${emp.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-white fs-4">Intern</h6>
            </div>
            <div class="card m-3" style="max-width: 18rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"> <b>Id: </b> ${emp.getId()}</li>
                  <li class="list-group-item"> <b>Email: </b>${emp.getEmail()}</li>
                  <li class="list-group-item"> <b>School: </b>${emp.getSchool()}</li>
                </ul>
              </div>
          </div>
        </div>
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://bootswatch.com/5/minty/bootstrap.min.css">
        <link rel="stylesheet" href="./css/style.css">
        <title>Employees</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-secondary mb-5">
            <div class="container-fluid justify-content-center">
              <span class="navbar-brand mb-0 h1 fs-2 text-white p-5">My Team</span>
            </div>
        </nav>
        <main class="row justify-content-center"> `
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