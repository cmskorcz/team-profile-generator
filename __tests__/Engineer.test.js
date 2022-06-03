const Engineer = require('../lib/Engineer');

const name = 'Chase'
const id = 1
const email = 'chaseskorey@gmail.com'
const github = 'cmskorcz'

describe('Engineer', () => {
    describe('properties', () => {

        it('should set properties as entered values', () => {

            const engineer = new Engineer(name, id, email, github);

            expect(engineer.name).toBe(name);
            expect(engineer.id).toBe(id);
            expect(engineer.email).toBe(email);
            expect(engineer.github).toBe(github);

        })
    })
    describe('methods', () => {

        it('should return value of github', () => {

            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getGithub()).toBe(github);

        })

        it(`should return role as 'Engineer'`, () => {

            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getRole()).toBe('Engineer');

        })
    })
})