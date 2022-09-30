const Engineer = require("../lib/Engineer");
//const fetch = require("jest-mock-fetch");

//jest.mock('fetch')

describe("Engineer class", () => {

    const engineer = new Engineer("Sam", 21, "samuelyongw@gmail.com", "KangaZero");

    describe("getGithub method", () => {
        it("returns user's github username", () => {
            expect(engineer.getGithub()).toBe("KangaZero");

            //TODO fix this
            // const result = "KangaZero";
            // const mock = jest.spyOn(console, "log");
            // mock.mockImplementation(() => {});

            // engineer.getGithub();
            // console.log(engineer.getGithub())
        
            // expect(mock).toBe(result);
            
            //  mock.mockRestore();
        
        });
    
        });
    });

 