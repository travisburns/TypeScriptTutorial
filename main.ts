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
let list2: Array<Number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: any = 10;

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();