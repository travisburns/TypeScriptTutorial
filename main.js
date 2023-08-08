"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Wlecome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'TypeScript Tutorial';
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var sentence = " My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
var newVariable = 10;
newVariable.toUpperCase;
//javascript
// function add(num1, num2) {
//     return num1 + num2; 
// }
//typescript
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
//expected behavour: pass
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Bruce",
    lastName: 'WAyne'
};
fullName(p);
