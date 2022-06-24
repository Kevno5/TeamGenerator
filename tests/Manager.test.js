const intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

describe('Manager tests', () => {
    const createManager = () => new Manager('test Manager', 1, 'test@gmail.com')

    it('get Manager name should be working', ()=>{
        const testManager = createManager();
        expect(testManager.getName()).toEqual('test Manager');
    })

    it('get Manager ID should work properly', () => {
        const testManager = createManager();
        expect(testManager.getId()).toEqual(1);
    })

    it('get Manager email should work properly', () => {
        const testManager = createManager();
        expect(testManager.getEmail()).toEqual('test@gmail.com');
    })

    it('get Manager role should work properly', () =>{
        const testManager = createManager();
        expect(testManager.getRole()).toEqual('Manager');
    })
})