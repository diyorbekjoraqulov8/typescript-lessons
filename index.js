"use strict";
/* TypeScript'da tiplarni o'zgartirish va birlashtirish */
// unknown type, union types, literal types, type aliases, required and optional properties, operator in
let a = 10;
let b = a; // Bu usul tavsiya qilinmaydi
let c = 20.9745;
let d = c;
let f = c; // Bu usul Type'ni o'zgartirishning xavfsiz usuli
// let d: number = (<number> c).toString()
// let f: number = (c as number).toFixed(2)
// union types - bitta variablega bir qancha Type berish
let h = 10;
h = 'one';
h = true;
// literal types - variable'ga berish mumkin bo'lgan bir qancha qiymat'ni ko'rsatish
let s;
s = "sm";
s = "lg";
s = "md";
let s2 = "SM";
s2 = "LG";
s2 = "MD";
let s3 = false;
s3 = "SM";
let obj1 = { name: "Hello" };
obj1 = { age: 20 };
obj1 = { name: "Hello1", age: 20 };
let obj2 = { name: "Azizbek", age: 13 };
let obj3 = { name: "Diyorbek" };
obj3 = { name: "Diyorbek", age: 20 };
// obj3 = { age: 20 }
if ("age" in obj3) {
    console.log("mavjud");
}
else {
    console.log("mavjud emas");
}
//# sourceMappingURL=index.js.map