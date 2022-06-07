const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');

const { addEngineer, addIntern} = require('./util/addEmployee')
const generateTeam = require('./src/html-template');

const teamArr = [];

inquirer
    .prompt([

        {

            type: 'text',
            name: 'name',
            message: `Please enter the Manager's name.`

        },

        {

            type: 'text',
            name: 'id',
            message: `Please enter the Manager's id.`

        },

        {

            type: 'text',
            name: 'email',
            message: `Please enter the Manager's email.`

        }, 

        {

            type: 'text',
            name: 'office',
            message: `Please enter the Manager's office number.`

        },

        {

            type: 'list',
            message: `Would you like to add more members, or finish team?`,
            name: 'action',
            choices: ['Add Engineer', 'Add Intern', 'Finish']

        }
    ])
    .then(({ name, id, email, office, action }) => {

        const manager = new Manager(name, id, email, office);

        teamArr.push(manager);

        if (action === 'Add Engineer') {

            addEngineer(teamArr)

        } else if (action === 'Add Intern') {

            addIntern(teamArr)

        } else {

            generateTeam(teamArr)
            
        }
    })