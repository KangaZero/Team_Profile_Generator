const Employee = require('../lib/Employee');

describe("Employee class", () => {

    const employee = new Employee("Sam", 21, "samuel@gmail.com");

    const falseEmployee = new Employee(214,"sfaf", "sammm")

    describe("getName method", () => {
        it("returns employee's name on the console", () => expect(employee.getName()).toEqual("Sam"));
        it("returns an error", () => expect(falseEmployee.getName()).toBe(undefined));
    });
    describe("getId method", () => {
        it("returns employee's ID on the console", () => expect(employee.getId()).toEqual(21));
        it("returns an error", () => expect(falseEmployee.getId()).toBe(undefined));
    });
    describe("getEmail method", () => {
        it("returns employee's email", () => expect(employee.getEmail()).toEqual("samuel@gmail.com"));
        it("returns an error", () => expect(falseEmployee.getEmail()).toBe(undefined));
    });
    describe("getRole method", () => {
        it("returns employee's role", () => expect(employee.getRole()).toEqual("Employee"));
        it("returns an error", () => expect(falseEmployee.getRole()).toBe(undefined));
    });
});