let fruits = ["Apple", "Banana", "Orange"];
let obj = {};
console.log("Arr1", fruits[0]);
console.log(typeof fruits); // output is object
console.log(typeof obj);  // output is object

// How to check a variable is a array.
console.log(Array.isArray(fruits)); // it will return boolean value, 

let arr = ["Rahul", "Raj", "AJ"];
arr.push("Moni"); // it is added element in the last of the index of an array
console.log(arr);

//1. How do you access the first and last elements of an array?
let array = [1, 2, 3, 4];
let firstEle = array[0];
let lastEle = array[array.length -1];
console.log("firstEle", firstEle);
console.log("LastEle", lastEle);

//2. How do you create an empty array in JavaScript?
let array1 = []; // this is array literal
let array2 = new Array(); // this is using Array() constructor.
console.log(array1, array2);

//3. How do you add an element to the end of an array?
array.push(5);
console.log("add element in the last index: ", array);
array.pop();
console.log("remove last element: ", array);

//4. How do you loop through an array in JavaScript?
for(let i = 0; i< array.length; i++){
   console.log(arr[i]);
}

//6. How do you check if an element exists in an array?
let a = [1,4,5,7,8];
// we can check element exits in an array using indexOf methods, if elements not exits it will return -1,
if(a.indexOf(4) !== -1){
   console.log("Element Exit");
}else{
   console.log("Element not exits");
}

//7. How do you remove an element from an array at a specific index?
// I want to remove 1st index. using splice method , it is taking two args, first is index number and second one is how many element 
// I want to remove, and if you want you can add element also using splice methods, after 2nd args pass values which you wanna add.
const ele = ["Apple", "Mango", "Orange", "Mouse"];
const removeFirstIndex = ele.splice(1,1);
console.log("removeFirstIndex", ele);

//8. How do you concatenate two arrays in JavaScript?
const arr1 = [2,4,7,9];
const arr2 = [4,7,3];
const arr3 = arr1.concat(arr2);
console.log("concate", arr3);

//9.

