const { TestScheduler } = require('jest');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        
        this.github = github; 
    }

    testUrl(){
        fetch(`https://github.com/${this.github}`)
        .then((response) => {
            response.ok ? console.log("Working!") : console.error("Invalid!")
        })
    }

    getGithub(){
        return this.github;
    }
}

const mas = new Engineer('mas', 23, "mas@gmail.com","KangaZero")

console.log(mas)

module.exports = Engineer;

