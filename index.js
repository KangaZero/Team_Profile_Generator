//NPMs
const fs = require('fs');
const inquirer = require('inquirer');
const { library } = require('@fortawesome/fontawesome-svg-core');
const { fas } = require('@fortawesome/free-solid-svg-icons');
const { far } = require('@fortawesome/free-regular-svg-icons');
const { fab } = require('@fortawesome/free-brands-svg-icons');

library.add(fas, far, fab);

//icons
//https://fontawesome.com/docs/apis/javascript/icon-library#using-the-library
const { findIconDefinition, icon } = require('@fortawesome/fontawesome-svg-core');
const star = findIconDefinition({ prefix: 'fas', iconName: 'star' });
const userTie = findIconDefinition({ prefix: 'fas', iconName: 'user-tie' });
const userGraduate = findIconDefinition({ prefix: 'fas', iconName: 'user-graduate' });
const userGear = findIconDefinition({ prefix: 'fas', iconName: 'user-gear' });

const starIcon = icon(star);
const userTieIcon = icon(userTie);
const userGraduateIcon = icon(userGraduate);
const userGearIcon = icon(userGear);

//test //TODO create test for icons
//console.log(starIcon)

//classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//merge
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// const test = { employeeName: 'mm', employeeId: '7', employeeEmail: 'lol' }
// const test2 =   {
//     managerId: 'l',
//     managerEmail: 'l',
//     managerOfficeNumber: 'l',
//     addEmployee: true
//   }
       //TODO merge method HERE!
// const test3 = {...test, ...test2}
//or
//const merge = (...objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur }));
//const merged = merge(test, test2)



inquirer
    .prompt([
        {
            type: "input",
            name: "teamName",
            message: "What is your Team name?",
        },
        {
            type: 'input',
            name: "managerName",
            message: "What is the name of your manager?",
        },
       
    ]).then((answers1) => {
       // console.log(answers1)
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: "managerId",
                    message: `What is the ID for ${answers1.managerName}?`,
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: `What is the email for ${answers1.managerName}?`,
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: `What is the office number for ${answers1.managerName}?`,
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: `Would you like to add an employee?`,
                },
            ]).then((answers2) => {
               // console.log(answers2)
                 if(answers2.addEmployee){
                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'role',
                                message: 'Choose the role for your new employee',
                                choices: ['Engineer', 'Intern', 'Employee'],
                            }, 
                ]).then((answers3) => {
                    let role = answers3.role.toLowerCase()
                   // console.log(role)
                   const rolePrompt = () => { 
                    switch(role){
                        case 'employee':
                            inquirer
                                .prompt([
                                    {
                                        type: 'input',
                                        name: 'employeeName',
                                        message: 'Enter employee name',
                                    },
                                    {
                                        type: 'input',
                                        name: 'employeeId',
                                        message: 'Enter employee ID',
                                    },
                                    {
                                        type: 'input',
                                        name: 'employeeEmail',
                                        message: 'Enter employee email',
                                    },
                            ]).then((employeeAnswers) => {
                                //might need to deconstruct later as well //TODO cut & paste to generateTeamPage
                            const {employeeName, employeeId, employeeEmail} = employeeAnswers;
                            });

                        break;

                        case 'engineer':
                            inquirer
                                .prompt([
                                    {
                                        type: 'input',
                                        name: 'engineerName',
                                        message: 'Enter engineer name',
                                    },
                                    {
                                        type: 'input',
                                        name: 'engineerId',
                                        message: 'Enter engineer ID',
                                    },
                                    {
                                        type: 'input',
                                        name: 'engineerEmail',
                                        message: 'Enter engineer email',
                                    },
                                    {
                                        type: 'input',
                                        name: 'engineerGithub',
                                        message: "Enter engineer's github username",
                                    },
                                 
                            ]).then((engineerAnswers) => {
                                //might need to deconstruct later as well //TODO cut & paste to generateTeamPage
                            const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerAnswers;
                                const answers = {...answers1, ...answers2, ...answers3, ...engineerAnswers};

                                const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        
                            const generateEngineerCard = (engineer) => 
                                `<div class="d-flex flex-column col-12 col-md-6 card text-center m-3 custom-card-dark text-light" style="width: 25rem;">
                                <img class="card-img-top" src="..." alt="Card image cap">
                                <div class="card-body">
                                  <h4 class="card-title">${engineer.name}<i>${starIcon}</i></h4>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item bg-secondary">ID: ${engineer.id}</li>
                                  <li class="list-group-item bg-secondary">Email: <a href="${engineer.email}">${engineer.email}</a></li>
                                  <li class="list-group-item bg-secondary">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li> 
                                </ul>
                            </div>`
                            
                                fs.appendFile('index.html', generateEngineerCard(engineer),'utf8', (err) => {
                                    err ? console.error(err) : console.log("Team Page created!")
                                });
                            // fs.writeFile('index.html', generateEngineerCard(engineer),'utf8', (err) => {
                            //     err ? console.error(err) : console.log("Team Page created!")
                            // });
                            });

                        
                        break;

                        case 'intern':
                            inquirer
                                .prompt([
                                    {
                                        type: 'input',
                                        name: 'internName',
                                        message: 'Enter intern name',
                                    },
                                    {
                                        type: 'input',
                                        name: 'internId',
                                        message: 'Enter intern ID',
                                    },
                                    {
                                        type: 'input',
                                        name: 'internEmail',
                                        message: 'Enter intern email',
                                    },
                                    {
                                        type: 'input',
                                        name: 'internSchool',
                                        message: `Enter intern's school name`,
                                    },
                            ]).then((internAnswers) => {
                                //might need to deconstruct later as well //TODO cut & paste to generateTeamPage
                            const {internName, internId, internEmail, internSchool} = internAnswers;
                            });
                        
                        break;

                        default: 
                            console.error("Oops something went wrong, please try again")
                    }};
                    //call rolePrompt function for prompt to appear
                    rolePrompt();
                        

                }) 
            } else{
                //TODO create fs.writeFile
                    //const teamPageContent = generateTeamPage(answers)
                    fs.writeFile('index.html', teamPageContent,'utf8', (err) => {
                        err ? console.error(err) : console.log("Team Page created!")
                    });
                };
        });     
    });



const generateTeamPage = () => 
`hi`