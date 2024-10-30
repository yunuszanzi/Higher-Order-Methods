console.log("Starting Higher order Array Method");
let arr = [34, 54, 23, 43, 76];
console.log(arr);

//map(value, index): this is used to iterate over an array also it returns a value, which can be stores to be used
let newArr = arr.map((num, index) => {
  console.log("The index of number is: ", index, ": ", num);
  return num;
});
console.log(newArr);

//filter(): this return the value te value to a new element based on the condition:

let arr3 = [12, 3, 14, 5, 6, 2, 12, "9"];

let resArr = arr3.filter((value) => {
  return value > 9;
});
console.log("original Array: ", arr3);
console.log("Update array: ", resArr);

//array.reduce(): this reduces an array to a single value based on the atatement returned

let arr4 = [1, 2, 4, 6, 8, 0];
let newArr4 = arr4.reduce((num, num2) => {
  console.log(num , num2);
  return num + num2;
});
console.log("Original Array 4", arr4);
console.log("newArray: ", newArr4);
