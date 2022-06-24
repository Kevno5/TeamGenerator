const intern = require('../lib/Intern');
const Intern = require('../lib/Intern');
describe('Employee test', () => {
    const createIntern = () => new Intern('test Intern', 1, 'test@gmail.com');

    it("get Employee name should work properly", () =>{
        const testIntern = createIntern();
        expect(testIntern.getName()).toEqual('test Intern');
    })

    it('get Intern Id should work properly', () => {
        const testIntern = createIntern();
        expect(testIntern.getId()).toEqual(1);
    })

    it('get Intern email should work properly', () =>{
        const testIntern = createIntern();
        expect(testIntern.getEmail()).toEqual('test@gmail.com');
    })

    it('get Intern role should work properly', () =>{
        const testIntern = createIntern();
        expect(testIntern.getRole()).toEqual('Intern');
    })
})