const Employee = require('../lib/Employee');
const intern = require('../lib/Intern');

describe('Employee test', () => {
    const createEmployee = () => new Employee('test Employee', 1, 'test@gmail.com');

    it('get Employee name should work properly', () => {
        const testEmployee = createEmployee();
        expect(testEmployee.getName()).toEqual('test Employee');
    })

    it('get Employee ID should work properly', () =>{
        const testEmployee = createEmployee();
        expect(testEmployee.getId()).toEqual(1);
    })

    it('get Employee role should work properly', () =>{
        const testEmployee = createEmployee();
        expect(testEmployee.getEmail()).toEqual('test@gmail.com');
    })

    it('get Employee role should work properly', () => {
        const testEmployee = createEmployee();
        expect(testEmployee.getRole()).toEqual('Employee');
    })
})