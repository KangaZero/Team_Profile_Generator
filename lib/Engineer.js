
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        
        this.github = github; 
    };

    getGithub(){
        return this.github;
        //TODO fix this and make fetch test
        // fetch(`https://github.com/${this.github}`)
        // .then((response) => {
        //     response.ok ? console.log(this.github) : console.error("Invalid username!")
        // })
    };
};

module.exports = Engineer;

