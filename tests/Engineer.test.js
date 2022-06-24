const Engineer = require('../lib/Engineer');
const intern = require('../lib/Intern');
describe('Engineer test', () => {
    const createEngineer = () => new Engineer('test Engineer', 1, 'test@gmail.com');

    it('get Engineer name should work properly', () => {
        const testEngineer = createEngineer();
        expect(testEngineer.getName()).toEqual('test Engineer');
    })

    it('get Engineer ID should work properly', () =>{
        const testEngineer = createEngineer();
        expect(testEngineer.getId()).toEqual(1);
    })

    it('get Engineer email should work properly', () => {
        const testEngineer = createEngineer();
        expect(testEngineer.getEmail()).toEqual('test@gmail.com');
    })

    it('get Engineer role should work properly', () =>{
        const testEngineer = createEngineer();
        expect(testEngineer.getRole()).toEqual('Engineer');
    })
})