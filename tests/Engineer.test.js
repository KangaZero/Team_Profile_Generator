const Engineer = require("../lib/Engineer");
//const fetch = require("jest-mock-fetch");

//jest.mock('fetch')

describe("Engineer class", () => {

    const engineer = new Engineer("Sam", 21, "samuelyongw@gmail.com", "KangaZero");

    describe("getGithub method", () => {
        it("returns user's github username", () => {
            expect(engineer.getGithub()).toBe("KangaZero");

        });
    
        });
    });

 