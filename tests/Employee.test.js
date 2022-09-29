const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns employee's name on the console", () => {
            const employee = new Employee("Sam", 21, "samuel@gmail.com");

            expect(employee.getName()).toEqual("Sam");
        });
    });
});

// class Employee {
//     constructor(name, id, email){
//         this.name = name;
//         this.id = id ;
//         this.email = email;
//     };

//     getName(){
//         console.log("name: ", this.name);
//     };

//     getId(){
//         console.log("ID: ", this.id);
//     };

//     getEmail(){
//         console.log("Email: ", this.email);
//     };

//     getRole(){
//         console.log("Role: ", this);
//     };
// };

// const test = new Employee("Sam", "21", "samuel@gmail.com")

// console.log(test)