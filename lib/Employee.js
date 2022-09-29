class Employee {
    constructor(name, id, email){
        if(typeof name === 'string'){

        this.name = name;
       
    } else {
            console.error("Not a valid input")
        }
        if(!isNaN(id)){

        this.id = id ;
        
    } else {
            console.error("Not a valid input")
        }
        if(email.includes("@") && isNaN){

        this.email = email;
       
    } else {
            console.error("Not a valid input")
        }
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
const faketest = new Employee(214,"sfaf", "sammm")

console.log(faketest)



module.exports = Employee;