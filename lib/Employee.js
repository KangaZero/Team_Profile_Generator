class Employee {
    constructor(name, id, email){
     const isName = typeof name === 'string' ? this.name = name : console.error("Not a valid input");
     const isId = !isNaN(id) ? this.id = id : console.error("Not a valid input");
     const isEmail = email.includes("@") && isNaN(email) ? this.email = email : console.error("Not a valid input");
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
        if(this.name && this.id && this.email){
        //https://www.delftstack.com/howto/javascript/get-class-name-in-javascript/
        return this.constructor.name;
        }
    };
};

const test = new Employee("Sam", "21", "samuel@gmail.com")
const faketest = new Employee(214,"sfaf", "sammm")

console.log("false", faketest)
console.log("true", test)


module.exports = Employee;