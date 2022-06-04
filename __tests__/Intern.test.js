const Intern = require('../lib/Intern');

const name = 'Chase';
const id = 1;
const email = 'chaseskorey@gmail.com';
const school = 'MSU';

describe('Intern', () => {
    describe('properties', () => {

        it('should give properties value of input', () => {

            const intern = new Intern(name, id, email, school);

            expect(intern.name).toBe(name);
            expect(intern.id).toBe(id);
            expect(intern.email).toBe(email);
            expect(intern.school).toBe(school);

        })
    })
    describe('methods', () => {

        it('should return value of this.school property', () => {

            const intern = new Intern(name, id, email, school);

            expect(intern.getSchool()).toBe(school);

        });

        it(`should return the role of the employee as 'Intern'`, () => {

            const intern = new Intern(name, id, email, school);

            expect(intern.getRole()).toBe('Intern');

        })

    })
})