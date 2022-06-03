const Employee = require('../lib/Employee');
const name = 'Chase';
const id = 1;
const email = 'chaseskorey@gmail.com';

describe('Employee', () => {
    describe('properties', () => {

        it('should set properties to entered values', () => {

            const employee = new Employee(name, id, email)

            expect(employee.name).toBe(name);
            expect(employee.id).toBe(1);
            expect(employee.email).toBe(email);


        })
    })
    describe('methods', () => {

        it('should return name of employee', () => {

            const employee = new Employee(name, id, email);

            expect(employee.getName()).toBe(name);

        })

        it('should return id of employee', () => {

            const employee = new Employee(name, id, email);

            expect(employee.getId()).toBe(id);

        })

        it('should return email of employee', () => {

            const employee = new Employee(name, id, email);

            expect(employee.getEmail()).toBe(email);

        })

        it(`should return role as 'Employee'`, () => {

            const employee = new Employee(name, id, email);

            expect(employee.getRole()).toBe('Employee');

        })
    })
})