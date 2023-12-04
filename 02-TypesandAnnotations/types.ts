// basic types
var id = 5;
var company = 'just a string';
var isPublished = true;
var age;
age = 10;
age = true;
var ids = [1, 2, 3, 4, 5];
var person = [1, 'Brad', true];


// first example --annotations
let myString = "my string";
myString = 5; // this is not allowed


// second example --annotations
function ReturnNumber() {
    return 24;
}

let anotherString = "another string";
anotherString = ReturnNumber(); // this is not allowed



//Sample with annotations
let myString2 : string = "my string";
myString2 = 5; // this is not allowed

function ReturnNumber2() : number {
    return 24;
}

let anotherString2 : string = "another string";
anotherString2 = ReturnNumber2(); // this is not allowed







