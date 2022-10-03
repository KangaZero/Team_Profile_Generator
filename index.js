//NPMs
const fs = require('fs');
const inquirer = require('inquirer');

// const { library } = require('@fortawesome/fontawesome-svg-core');
// const { fas } = require('@fortawesome/free-solid-svg-icons');
// const { far } = require('@fortawesome/free-regular-svg-icons');
// const { fab } = require('@fortawesome/free-brands-svg-icons');


// library.add(fas, far, fab);

// //icons
// //https://fontawesome.com/docs/apis/javascript/icon-library#using-the-library
// const { findIconDefinition, icon } = require('@fortawesome/fontawesome-svg-core');
// const star = findIconDefinition({ prefix: 'fas', iconName: 'star' });
// const userTie = findIconDefinition({ prefix: 'fas', iconName: 'user-tie' });
// const userGraduate = findIconDefinition({ prefix: 'fas', iconName: 'user-graduate' });
// const userGear = findIconDefinition({ prefix: 'fas', iconName: 'user-gear' });

// const starIcon = icon(star);
// const userTieIcon = icon(userTie);
// const userGraduateIcon = icon(userGraduate);
// const userGearIcon = icon(userGear);



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
       const generateTopSection = (answers1) =>
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${answers1.teamName}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
            <link href="./dist/style.css" type="text/css" rel="stylesheet"/>
        </head>
        <body class="custom-background">
            <div class="container-fluid text-center text-light bg-dark p-4">
                <h1 class="mx-auto">${answers1.teamName}</h1>
            </div>
                <hr class="border border-white">
            <div id="main" class="d-flex flex-row flex-wrap justify-content-around col-12">`

            fs.writeFile('index.html', generateTopSection(answers1),'utf8', (err) => {
                err ? console.error(err) : console.log("Page created!")
            });

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
            ]).then((answers2) => {
                     const managerAnswers = {...answers1, ...answers2}
                     const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers. managerOfficeNumber)
                        
                        const generateManagerCard = (manager) =>
                        `<div class="d-flex flex-column col-12 col-md-6 card text-center m-3 custom-card-dark text-light" style="width: 25rem;">
                        <div class="card-body">
                        <button id="manager-btn" class="btn btn-secondary w-10 position-absolute top-0 end-0"><i class="fa-solid fa-copy"></i></button>
                        <h4 id="manager-name" class="card-title">${manager.name} <i class="fa-solid fa-star"></i></h4>
                        </div>
                            <ul class="list-group list-group-flush">
                                <li id="manager-id" class="list-group-item bg-secondary">ID: ${manager.id}</li>
                                <li id="manager-email" class="list-group-item bg-secondary">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                                <li id="manager-office-number" class="list-group-item bg-secondary">Office number: ${manager.officeNumber}</li> 
                            </ul>
                        </div>`
                
                fs.appendFile('index.html', generateManagerCard(manager),'utf8', (err) => {
                    err ? console.error(err) : console.log("Manager card appended!")
                });

                // const copyManagerText = () =>{
                //     const managerBtnEl = document.querySelector('#manager-btn');
                //     managerBtnEl.addEventListener("click", () =>{
                //         const managerText = `Name: ${manager.name}\nRole: ${manager.getRole()}\nId: ${manager.id}\nEmail: ${manager.email}\n Office number: ${manager.officeNumber}`
                //         managerText.select();
                //     });
                // };  copyManagerText();

                    inquirer
                    .prompt([
                        {
                            type: 'confirm',
                            name: 'addEmployee',
                            message: `Would you like to add an employee?`,
                        },
                    ]).then((confirm) => {
                        const confirmPrompt = () => {
                        if(confirm.addEmployee || repick.repick){
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
                                        const {employeeName, employeeId, employeeEmail} = employeeAnswers;
                                        const employee = new Employee(employeeName, employeeId, employeeEmail);

                                            const generateEmployeeCard = (employee) =>
                                                `<div class="d-flex flex-column col-12 col-md-6 card text-center m-3 custom-card-dark text-light" style="width: 25rem;">
                                                <div class="card-body">
                                                <button id="employee-btn" class="btn btn-secondary w-10 position-absolute top-0 end-0"><i class="fa-solid fa-copy"></i></button>
                                                <h4 id="employee-name" class="card-title">${employee.name} <i class="fa-solid fa-user-tie"></i></h4>
                                                </div>
                                                    <ul class="list-group list-group-flush">
                                                    <li id="employee-id" class="list-group-item bg-secondary">ID: ${employee.id}</li>
                                                    <li id="employee-email" class="list-group-item bg-secondary">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                                    </ul>
                                                </div>`

                                                fs.appendFile('index.html', generateEmployeeCard(employee),'utf8', (err) => {
                                                    err ? console.error(err) : console.log("Employee card appended!")
                                                });

                                                // const copyEmployeeText = () =>{
                                                //     const employeeBtnEl = document.querySelector('#employee-btn');
                                                //     employeeBtnEl.addEventListener("click", () =>{
                                                //         const employeeText = `Name: ${employee.name}\nRole: ${employee.getRole()}\nId: ${employee.id}\nEmail: ${employee.email}`
                                                //         employeeText.select();
                                                //     });
                                                // };  copyEmployeeText();

                                                repickPrompt();
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
                                            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                    
                                                const generateEngineerCard = (engineer) => 
                                                `<div class="d-flex flex-column col-12 col-md-6 card text-center m-3 custom-card-dark text-light" style="width: 25rem;">
                                                <div class="card-body">
                                                <button id="engineer-btn" class="btn btn-secondary w-10 position-absolute top-0 end-0"><i class="fa-solid fa-copy"></i></button>
                                                <h4 id="engineer-name" class="card-title">${engineer.name} <i class="fa-solid fa-user-gear"></i></h4>
                                                </div>
                                                    <ul class="list-group list-group-flush">
                                                    <li id="engineer-id" class="list-group-item bg-secondary">ID: ${engineer.id}</li>
                                                    <li id="engineer-email" class="list-group-item bg-secondary">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                                                    <li id="engineer-github" class="list-group-item bg-secondary">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li> 
                                                    </ul>
                                                </div>`
                                        
                                            fs.appendFile('index.html', generateEngineerCard(engineer),'utf8', (err) => {
                                                err ? console.error(err) : console.log("Engineer card appended!")
                                            });

                                            // const copyEngineerText = () =>{
                                            //     const engineerBtnEl = document.querySelector('#enigneer-btn');
                                            //     engineerBtnEl.addEventListener("click", () =>{
                                            //         const engineerText = `Name: ${engineer.name}\nRole: ${engineer.getRole()}\nId: ${engineer.id}\nEmail: ${engineer.email}\nGithub: ${engineer.github}`
                                            //         engineerText.select();
                                            //     });
                                            // };  copyEngineerText();

                                            repickPrompt();
                                      
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
                                        const {internName, internId, internEmail, internSchool} = internAnswers;
                                        const intern = new Intern(internName, internId, internEmail, internSchool);

                                            const generateInternCard = (intern) =>
                                            `<div class="d-flex flex-column col-12 col-md-6 card text-center m-3 custom-card-dark text-light" style="width: 25rem;">
                                            <div class="card-body">
                                            <button id="intern-btn" class="btn btn-secondary w-10 position-absolute top-0 end-0"><i class="fa-solid fa-copy"></i></button>
                                            <h4 id="intern-name" class="card-title">${intern.name} <i class="fa-solid fa-user-graduate"></i></h4>
                                            </div>
                                                <ul class="list-group list-group-flush">
                                                <li id="intern-id" class="list-group-item bg-secondary">ID: ${intern.id}</li>
                                                <li id="intern-email" class="list-group-item bg-secondary">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                                                <li id="intern-school" class="list-group-item bg-secondary">School: ${intern.school}</li> 
                                                </ul>
                                            </div>`

                                            fs.appendFile('index.html', generateInternCard(intern),'utf8', (err) => {
                                                err ? console.error(err) : console.log("Intern card appended!")
                                            });

                                            // const copyInternText = () =>{
                                            //     const internBtnEl = document.querySelector('#intern-btn');
                                            //     internBtnEl.addEventListener("click", () =>{
                                            //         const internText = `Name: ${intern.name}\nRole: ${intern.getRole()}\nId: ${intern.id}\nEmail: ${intern.email}\nSchool: ${intern.school}`
                                            //         internText.select();
                                            //     });
                                            // };  copyInternText();

                                            repickPrompt();

                                        });
                                    
                                    break;
            
                                    default: 
                                        console.error("Oops something went wrong, please try again")
                                    
                                }};
                            rolePrompt();
                    })
                }   else{
                    end();
                };
                    
            
             };
             const repickPrompt = () => {
                inquirer
                    .prompt([
                        {
                            type:'confirm',
                            name:'repick',
                            message: "Would you to add another employee?"
                        }
                    ]).then((repick => repick.repick ? confirmPrompt() : end())) 
                };
             confirmPrompt();
             }); //132
       // }; //124
        
                // const repickPrompt = () => {
                //     inquirer
                //         .prompt([
                //             {
                //                 type:'confirm',
                //                 name:'repick',
                //                 message: "Would you to add another employee?"
                //             }
                //         ]).then((repick => repick.repick ? confirmPrompt() : end())) 
                //     };
                
                }); //104
            });   //64  
    


    const end = () => {
        const generateBottomSection = () =>
        `</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> 
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
        <script src="./index.js"></script>
        <script src="./copy.js"></script>
        <script>
            $(function() {
    $( ".card" ).draggable();
  } );
        </script>
    </body>
    </html>`

        fs.appendFile('index.html', generateBottomSection(),'utf8', (err) => {
                        err ? console.error(err) : console.log("Team Page completed!")
                    });
                };

