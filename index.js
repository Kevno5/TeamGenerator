const inq = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');


const employees = [];

const addEngineer = () =>{
    inquirer.prompt ([

        {
            type: 'input',
            name: 'engineerName',
            message: "what is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "'What is the engineer's id?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "what is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's github username?"
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGithub);
        employees.push(engineer)
        askForNextEmployee();
    })
}

const addIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Where did the intern go to school?"
        }
    ]).then((answers) => {
        const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employees.push(intern);
        askForNextEmployee();
    })
}

const generateHTML = (employee) => {
    let temp = `
    

    <div class="col-6">
    <div class="card mx-auto mb-3" style="width: 18rem">
    <h5 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email Address: ${employee.getEmail()}</li>
        
    `;

            const role = employee.getRole();
            if(role === 'Engineer'){
                temp = temp + `<li class="list-group-item">Github: ${employee.getGithub()}</li></ul>
                </div>
            </div>`
            }else if(role === 'Intern'){
                temp = temp + `<li class="list-group-item">School: ${employee.getSchool()}</li></ul>
                </div>
            </div>`
            }else if(role === 'Manager'){
                temp = temp + `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li></ul>
                </div>
            </div>`
            }

            temp = temp ;
            return temp;
}



const askForNextEmployee = () =>{
    inq.prompt([{
        message: 'Who would you like to add to your team?',
        type: 'list',
        choices: ['Engineer', 'Intern', 'Done'],
        name: 'nextOperation'
    }]).then((answers) => {
        switch(answers.nextOperation) {
            case 'Engineer': {
                addEngineer();
                break;
            }
            case 'Intern': {
                addIntern();
                break;
            }
            case 'Done': {
                console.log(employees);

                let htmlBody = '';
                for(const employee of employees) {
                    htmlBody += generateHTML(employee);
                }

                const html = `<!DOCTYPE html>
                <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
        ${htmlBody}
        </body>
        </html>`;

                fs.writeFileSync('./index.html', html)

                break;
            }
        }
    })
}

inq.prompt([{
    type: 'input',
    name: 'firstName',
    message: 'What is your name?',
},
{
    type: 'input',
    name: 'employeeId',
    message: 'What is your employee ID?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?'
}]).then((answers) => {
    const manager = new Manager(answers.firstName, answers.employeeId, answers.email, answers.officeNumber);
    employees.push(manager);
    askForNextEmployee();
})