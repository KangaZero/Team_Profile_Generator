const Manager = require('../lib/Manager');

describe("Manager class", () =>{
    describe("getOfficeNumber method", () => {
        it("returns manager's office number", () => {
            const manager = new Manager("Sam", 21, 'samuelyongw@gmail.com', 25);
            const fakeManager = new Manager("Sam", 21, 'samuelyongw@gmail.com', "25");
            
            expect(manager.getOfficeNumber()).toBe(25);
            expect(fakeManager.getOfficeNumber()).toBe(undefined);
        });
    });
})