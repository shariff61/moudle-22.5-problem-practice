/*
৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
*/

const num1 = 10;
const num2 = 10;
const num3 = 21;
if (num1 === num2 && num3 === num1 + num2) {
  console.log(true);
} else {
  console.log(false);
}
//-----------------//
if (num1 === num2 || num3 === num1 + num2) {
  console.log(true);
} else {
  console.log(false);
}
//-------------------------problem 6------------------------------//
/*
৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
*/

const tourPrice = 5001;
if (tourPrice <= 5000) {
  console.log("i will go with other friend also");
} else if (tourPrice < 6000) {
  console.log("i will go picnic");
} else {
  console.log("i will not go picnic");
}
//-------------------problem 7--------------------------------//
/*
৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
*/

let num = 7;
while (num <= 19) {
  console.log(num);
  num += 2;
}
//-------------------problem 8-----------------------//
/*
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
*/
const arr = [2, 3, 5, 7, 9, 32];
const arrOfLength = arr.length;
arr[3] = 5;

const arrPush = arr.push(23, 24, 23, 54, 33);
const arrPop = arr.pop();
const lastLength = arr.length;
console.log(arrOfLength, arr, lastLength);
