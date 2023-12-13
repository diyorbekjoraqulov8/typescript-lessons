"use strict";
// TypeScript - Arrays, Tuples & Enums
let a = []; // type of a auto ANY
a = [12, "dfr", true, undefined, {}];
// let b = [1,3,2,7,9] // type of b is number
// b = ['efef'] // Error
let b;
b = [12, 42];
let c = [12]; // type of c number Array
c = [4, 67, 9];
let d = ['He', 12, "sdgf"]; // type of d number and string Array
let e = [false, 2]; // type of e boolean and number Array
// e = ['1'] // Error
// ==================================
// Tuples (Kartejlar) - har bit array indexi'dagi qiymat uchun type berish.
let f; // in f must be index 1 = number and index 2 = string
f = [9, 'dgrfg'];
// f = [334] // Error, because f must have two properties
let j;
let h;
// ==================================
// Enums - Qayta hisoblash
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// console.log(Gender); // Gender = { '0': 'Male', '1': 'Female', Male: 0, Female: 1 }
// console.log(Gender.Male, Gender.Female); // 0 1
// console.log(Gender[Gender.Male], Gender[Gender.Female]); // Male Female
var G;
(function (G) {
    G[G["A"] = 0] = "A";
    G[G["B"] = 10] = "B";
    G[G["C"] = 11] = "C"; // 11
})(G || (G = {}));
// console.log(G); // { '0': 'A', '10': 'B', '11': 'C', A: 0, B: 10, C: 11 }
// console.log(G.A, G.B, G.C); // 0 10 11
var H;
(function (H) {
    H["A"] = "Hello";
    H["B"] = "Typescript";
})(H || (H = {}));
// Agar enum'ni const bilan elon qiladigan bo'lsak kompilatsiya paytoda kod emas to'g'ridan to'g'ri natija o'tadi
//# sourceMappingURL=index.js.map