class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id ;
        this.email = email;
    };

    getName(){
        return this.name;
    };

    getId(){
        console.log("ID: ", this.id);
    };

    getEmail(){
        console.log("Email: ", this.email);
    };

    getRole(){
        console.log("Role: ", this);
    };
};

const test = new Employee("Sam", "21", "samuel@gmail.com")

console.log(test)

module.exports = Employee;