//1. Print 1st nth natural number??

let initial = 0;
let num = 10;
for(let i = 0; i<= num; i++){
    initial = initial + i;
}
console.log("sum of nth natural number: ", initial);

//2. break and continue keyword??
// So break keyword is basically break the execution.

for(let i = 0; i<= 10; i++){
    if(i === 5){
        break;
    }
    console.log("next line: ", i); // Ans: 0,1,2,3,4 
}

// continue keyword basically skip the iteration.
for(let i = 0; i<=10; i++){
    if(i === 5){
        continue;
    }
    console.log(i)
}

// while loop & do while loop
// do loops first check the condition, then it will enter inside loops.
let i = 0;
while(i<=9){
    console.log("do loops: ", i);
    i++;
}

// while loop , if our condition is false also, 1st time it will execute.
// do{
// console.log("while loops");
// }while(i === 10);

// undefined and null
// undefined: If we declared a variable and we are not assigning with anything, then the type of variable is undefined.
let firstName;
console.log("undefined",typeof firstName);

// we are assigning a variable with null data type. and the typeof null is object.
let lastName = null;
console.log("Null",typeof lastName);


