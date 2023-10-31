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

// filter 
const words = ['react', 'script', 'interview', 'style', 'javascript']
const ans = words.filter((word) => word.length > 6)
console.log(ans)

// without the array method

let newArray = []

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    newArray.push(words[i])
  }
}
console.log(newArray);

// this 
console.log("window this",this)

// here this is pointing object
function myFunction() {
    console.log(this)     
  }
 
const obj = {
  bool: true,
  myFunction: myFunction,
}

obj.myFunction(); // window

// here this refers to object itself
const student_1 =  {
    name: 'AJ',
    displayName1: function displayName() {
        console.log(this.name)
    }
}
const student_2 =  {
    name: 'RajKumar',
    displayName2: function displayName() {
        console.log(this.name)
    }
}

student_1.displayName1()
student_2.displayName2()

for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
  }


  console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

// How do you clone an object?

let obj1 = {a: 1 ,b: 2}
let objclone = Object.assign({},obj1);
console.log("clone", objclone)

