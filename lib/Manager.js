const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        const isOfficeNumber = !isNaN(officeNumber) ? this.officeNumber = officeNumber : console.error("Office Number: Not a valid input");
    };

    getOfficeNumber(){
        return this.officeNumber;
    };
};

module.exports = Manager;