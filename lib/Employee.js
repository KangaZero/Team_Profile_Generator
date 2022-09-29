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
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(){
        //https://www.delftstack.com/howto/javascript/get-class-name-in-javascript/
        return this.constructor.name;
    };
};

const test = new Employee("Sam", "21", "samuel@gmail.com")

console.log(test.getRole())



module.exports = Employee;