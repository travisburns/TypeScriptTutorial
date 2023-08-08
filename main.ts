export {}
let message = 'Wlecome back'
console.log(message);





let x = 10;
const y = 20;

let sum;
const title = 'TypeScript Tutorial';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';


let sentence: string = ` My name is ${name}
I am a beginner in Typescript`

console.log(sentence)


let n: null = null;
let u: undefined = undefined;




let list1: number[] = [1,2,3];


let person1: [string, number] = ['Chris', 22];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';






let newVariable: unknown = 10;

(newVariable as string).toUpperCase

//javascript
// function add(num1, num2) {
//     return num1 + num2; 
// }
//typescript
function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}


//expected behavour: pass
add(5, 10);


add(5);


interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}


let p = {
    firstName: "Bruce",
    
}


fullName(p);

class Employee {
  public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }

}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating Tasks`)
    }

}

let m1 = new Manager(`Bruce`);
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
