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
console.log(starIcon)

//classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
       
    ]).then((answers) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: "managerId",
                    message: `What is the ID for ${answers.managerName}?`
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: `What is the email for ${answers.managerName}?`
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: `What is the office number for ${answers.managerName}?`
                }
            ])
            
    });