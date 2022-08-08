/*
১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
*/

const name = "Sharif";
const isTrue = true;
const number = 12;
//---------------------------------------------//
//------------problem 2--------------//
/*
২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
*/
const myCountryName = "Bangladesh";

let day = "monday";
day = "tuesday";
console.log(myCountryName, day);
//----------------------problem 3------------------------------//
/*
৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 
*/

const firstNumber = 15;
const secondNumber = 5;
const totalNumberAddition = firstNumber + secondNumber;
const totalNumberSubtraction = firstNumber - secondNumber;
const totalNumberMultiplication = firstNumber * secondNumber;
const totalNumberDivision = firstNumber / secondNumber;
const totalNumberModule = firstNumber % secondNumber;
console.log(
  totalNumberAddition,
  totalNumberSubtraction,
  totalNumberMultiplication,
  totalNumberDivision,
  totalNumberModule
);
//----------------------problem 4-----------------------------------//
/*
৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
*/

const first = 15;
const second = 10;
if (first > second) {
  console.log("first is big");
} else {
  console.log("second is big");
}
//----------------//
if (first < second) {
  console.log("second is big");
} else {
  console.log("first is big");
}
//------------------------//
if (first === second) {
  console.log("first and second is same number");
} else {
  console.log("first and second is not a same number");
}
//-------------//
if (first !== second) {
  console.log("this is true");
} else {
  console.log("this is false");
}
//----------------------//
if (first <= second) {
  console.log("second is big or equal");
} else {
  console.log("second is small");
}
//----------------//
if (first >= second) {
  console.log("first is big or equal");
} else {
  console.log("second is big");
}
