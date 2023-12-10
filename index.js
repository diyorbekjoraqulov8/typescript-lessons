"use strict";
/* TypeScript => function, signature functions, function overloads */
// function fnName(arg1:arg-type, arg2:arg-type): return-data-type {
//   return x ** y;
// }
// Function Decloration
function pow(x, y) {
    return x ** y;
}
// Arrow Function
const add = (x, y) => x + y;
// void functions - hech narsa qaytarmaydigan funksiyalar.
function log(x) {
    console.log(x);
}
// never functions - hech qachon tugamaydiga (rekursev), yoki Error qaytaradigan funksiyalar
function someFunc(s) {
    throw new Error(s);
}
// signature functions - biz shablon yaratamiz va keyinroq shunga moslab qiymat beramiz
let c;
c = function (a, b) {
    return `${b}: ${a}`;
};
console.log(c(2, "Javob"));
function overloadFunc(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunc(1, 2));
//# sourceMappingURL=index.js.map