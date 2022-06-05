const inquirer = require('inquirer')

const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

const generateCards = require('../src/html-template')

module.exports.addEngineer = (arr) => {

    inquirer
        .prompt([
            {

                type: 'text',
                name: 'name',
                message: `What is the Engineer's name?`

            },

            {

                type: 'text',
                name: 'id',
                message: `What is the Engineer's ID?`

            },

            {

                type: 'text',
                name: 'email',
                message: `What is the Engineer's email?`

            },

            {

                type: 'text',
                name: 'github',
                message: `What is the Engineer's GitHub account?`

            },

            {

                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add Engineer', 'Add Intern', 'Finish']

            }
        ])
        .then(({ name, id, email, github, action }) => {

            const engineer = new Engineer(name, id, email, github);

            arr.push(engineer);

            if (action === 'Add Engineer') {

                this.addEngineer(arr)

            } else if (action === 'Add Intern') {

                this.addIntern(arr)

            } else {

                const cards = generateCards(arr)

                console.log(cards)
    
            }
        })
}

module.exports.addIntern = (arr) => {

    inquirer
        .prompt([
            {

                type: 'text',
                name: 'name',
                message: `What is the Intern's name?`

            },

            {

                type: 'text',
                name: 'id',
                message: `What is the Intern's ID?`

            },

            {

                type: 'text',
                name: 'email',
                message: `What is the Intern's email?`

            },

            {

                type: 'text',
                name: 'school',
                message: `Where does the Intern go to school?`

            },

            {

                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add Engineer', 'Add Intern', 'Finish']

            }
        ])
        .then(({ name, id, email, school, action }) => {

            const intern = new Intern(name, id, email, school)

            arr.push(intern)

            if (action === 'Add Engineer') {

                this.addEngineer(arr)

            } else if (action === 'Add Intern') {

                this.addIntern(arr)

            } else {

                const cards = generateCards(arr)

                console.log(cards)
    
            }
        })
}