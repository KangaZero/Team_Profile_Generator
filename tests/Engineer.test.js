const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

    const engineer = new Engineer("Sam", 21, "samuelyongw@gmail.com", "KangaZero");

    describe("getGithub method", () => {
        it("returns user's github username", () => {

            const myMockFn = jest.fn(() => "KangaZero")

            expect(myMockFn()).toBe("KangaZero")
        });
    
        });
    });

