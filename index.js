const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const generatePage = require('./templates/page-template');
const {writeFile, copyFile} = require('./utils/generateHtml');

const managerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ]).then(managerData => {
        const{name, id, email, officeNumber} = managerData
        employee = new Manager(name, id, email, officeNumber)
        let role = {role: 'Manager'};
        return {...managerData, ...role}
    })
}

const employeeInfo = managerData => {
    if(!managerData.engineers) {
        managerData.engineers = [];
    }
    if(!managerData.interns) {
        managerData.interns = [];
    }

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Would like to add an engineer, intern, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ]).then(userSelect => {
        switch (userSelect.role) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                createTeam();
        }
    });

    function createEngineer() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?"
            }
        ]).then(engineerData => {
            employee = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
            let role = {role: 'Engineer'}
            managerData.engineers.push({...engineerData, ...role})
            return employeeInfo(managerData);
        })
    }

    function createIntern() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            }
        ]).then(internData => {
            employee = new Intern(internData.name, internData.id, internData.email, internData.school)
            let role = {role: 'Intern'}
            managerData.interns.push({...internData, ...role})
            return employeeInfo(managerData);
        })
    }

    function createTeam() {
        console.log('sucessfully ran')
    }
}

managerInfo()
    .then(employeeInfo)
    .then(managerData => {
        return generateSite(managerData);
    })
    .then(pageHtml => {
        return writeFile(pageHtml);
    })
    .then(writeFileresponse => {
        console.log("----------------------------")
        console.log(writeFileResponse.message);
        return copyFile();
    })
    .then(copyFileRespnse => {
        console.log(copyFileRespnse.message)
        console.log("----------------------------");
    })
    .catch(err => {
        console.log(err);
    });

// managerInfo()
// .then(employeeInfo)
// .then(managerData => {
//     return console.log('asked questions successfully')
// })