const Employee = require('../lib/Employee');

describe("Employee class", () => {

    const employee = new Employee("Sam", 21, "samuel@gmail.com");


    describe("getName method", () => {
        it("returns employee's name on the console", () => expect(employee.getName()).toEqual("Sam"));
    });
    describe("getId method", () => {
        it("returns employee's ID on the console", () => expect(employee.getId()).toEqual(21));
    });
    describe("getEmail method", () => {
        it("returns employee's email", () => expect(employee.getEmail()).toEqual("samuel@gmail.com"));
    });
    describe("getRole method", () => {
        it("returns employee's role", () => expect(employee.getRole()).toEqual("Employee"));
    });
});