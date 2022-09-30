const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("returns Intern's school name", () =>{

            const intern = new Intern("Sam", 21, "samuelyongw@gmail.com", "USYD");

            expect(intern.getSchool()).toBe("USYD");
        });
    });
});