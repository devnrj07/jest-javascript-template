const doSomething = require('./index')


describe("doSomething tests :", () => {

    beforeEach(() => {
        jest.spyOn(console, 'log');
    });

    afterEach(() => {
        console.log.mockRestore();
    });



    it(' is defined', () => {

        expect(doSomething).toBeDefined();

    });



    it(`prints "I'm a dummy function"`, () => {
        doSomething();
        expect(console.log.mock.calls[0][0]).toEqual(`I'm a dummy function`);
    })

    it(`it returns 'I'm a dummy function'`, () => {
        expect(doSomething()).toBe("I'm a dummy function")
    })

})