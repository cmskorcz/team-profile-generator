const Manager = require('../lib/Manager');

const name = 'Chase';
const id = 1;
const email = 'chaseskorey@gmail.com';
const officeNumber = 101;

describe('Manager', () => {
    describe('properties', () => {

        it('should should set properteis to entered values', () => {

            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.name).toBe(name)
            expect(manager.id).toBe(id)
            expect(manager.email).toBe(email)
            expect(manager.officeNumber).toBe(officeNumber);

        })
    })
    describe('methods', () => {

        it(`should return role as 'Manager'`, () => {

            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.getRole()).toBe('Manager');

        })

    })
})