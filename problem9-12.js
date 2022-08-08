/*
৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
*/
const arr = [2, 34, 56, 7, 5, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (const array of arr) {
  console.log("this is another loop", array);
}
//-----------------problem 10--------------------//
/*
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
*/

const largeArr = [55, 67, 99, 88, 79, 84];

let newArr = [];
let largeNumber = 80;
for (let i = 0; i < largeArr.length; i++) {
  const element = largeArr[i];
  if (element > largeNumber) {
    newArr.push(element);
  }
}
console.log(newArr);
//--------------------problem 11-------------------------//
/*
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
*/
function multiplicationNumbers(firstNumber, secondNumber, thirdNumber) {
  const totalNumber = firstNumber * secondNumber * thirdNumber;
  return totalNumber;
}
const allNumberMultiplication = multiplicationNumbers(2, 4, 6);
console.log(allNumberMultiplication);
//------------------------problem 12 --------------------//
/*
১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
*/

const myObj = {
  name: "sharif",
  age: 22,
  job: "web developer",
};
myObj.age = 26;
console.log(myObj);
